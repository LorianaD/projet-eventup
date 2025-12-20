import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../../db/index.js";
import { env } from "../../config/env.js";

export async function login(email, password) {
  const [rows] = await pool.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  const user = rows[0];
  if (!user) {
    return { ok: false, status: 401, error: "user introuvable" };
  }

  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) {
    return { ok: false, status: 401, error: "mdp incorrect" };
  }

  const token = jwt.sign(
    { sub: user.id, email: user.email },
    env.jwtSecret,
    { expiresIn: "1h" }
  );

  return { ok: true, token, user: { id: user.id, email: user.email } };
}