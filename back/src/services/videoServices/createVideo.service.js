import { pool } from "../../db/index";

export async function createVideo(videoData) {
    const sql = `
        INSERT INTO videos (title, file, theme, description)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        videoData.title,
        videoData.description,
        videoData.filename,
        videoData.original_name,
        videoData.mime_type,
        videoData.size,
        videoData.path,
    ];

    const [result] = await pool.execute(sql, values);

    return {
        id: result.insertId,
        ...videoData,
    };
}
