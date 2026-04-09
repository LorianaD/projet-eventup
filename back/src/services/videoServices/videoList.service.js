import { pool } from "../../db/index.js";

export async function listVideosService({ title, theme, description, date } = {}) {
    let sql = `
        SELECT
            v.id,
            v.title,
            v.description,
            v.created_at,
            v.file,
            v.type,
            v.size,
            v.path,
            v.thumbnail,
            v.user_id,
            t.name AS theme
        FROM videos v
        LEFT JOIN theme t ON t.id = v.theme_id
        WHERE 1 = 1
    `;

    const params = [];

    if (title) {
        sql += " AND v.title LIKE ?";
        params.push(`%${title}%`);
    }

    if (description) {
        sql += " AND v.description LIKE ?";
        params.push(`%${description}%`);
    }

    if (date) {
        sql += " AND DATE(v.created_at) = ?";
        params.push(date);
    }

    if (theme) {
        sql += " AND t.name = ?";
        params.push(theme);
    }

    sql += " ORDER BY v.created_at DESC";

    const [rows] = await pool.execute(sql, params);

    return rows;
}