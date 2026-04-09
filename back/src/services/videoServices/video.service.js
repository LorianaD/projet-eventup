import { pool } from "../../db/index.js";

export async function createVideoService(video) {
  const sql = `
    INSERT INTO videos
      (title, file, theme_id, description, type, size, path, thumbnail, user_id)
    VALUES
      (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    video.title,
    video.file,
    video.theme_id,
    video.description,
    video.type,
    video.size,
    video.path,
    video.thumbnail,
    video.user_id,
  ];

  const [result] = await pool.execute(sql, values);

  return {
    id: result.insertId,
    ...video,
  };
}