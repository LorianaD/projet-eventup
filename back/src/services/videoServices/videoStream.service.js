import { pool } from "../../db/index.js";

export async function findVideoByIdService(id) {
    const [rows] = await pool.query(
        "SELECT * FROM videos WHERE id = ?",
        [id]
    );

    return rows[0] || null;
}