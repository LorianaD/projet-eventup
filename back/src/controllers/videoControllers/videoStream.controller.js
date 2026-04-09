import fs from "fs";
import path from "path";
import { findVideoByIdService } from "../../services/videoServices/videoStream.service.js";

export async function videoStreamController(req, res) {
    try {
        const { id } = req.params;

        const video = await findVideoByIdService(id);

        if (!video) {
            return res.status(404).json({
                message: "Vidéo introuvable"
            });
        }

        if (!video.path) {
            return res.status(404).json({
                message: "Chemin vidéo introuvable"
            });
        }

        const videoPath = path.resolve(video.path);

        if (!fs.existsSync(videoPath)) {
            return res.status(404).json({
                message: "Fichier vidéo introuvable"
            });
        }

        const stat = fs.statSync(videoPath);
        const fileSize = stat.size;
        const range = req.headers.range;

        if (range) {
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunkSize = end - start + 1;

            const fileStream = fs.createReadStream(videoPath, { start, end });

            res.writeHead(206, {
                "Content-Range": `bytes ${start}-${end}/${fileSize}`,
                "Accept-Ranges": "bytes",
                "Content-Length": chunkSize,
                "Content-Type": video.type || "video/mp4"
            });

            fileStream.pipe(res);
            return;
        }

        res.writeHead(200, {
            "Content-Length": fileSize,
            "Content-Type": video.type || "video/mp4"
        });

        fs.createReadStream(videoPath).pipe(res);

    } catch (error) {
        console.error("Erreur videoStreamController :", error);

        return res.status(500).json({
            message: "Erreur serveur lors de la lecture vidéo"
        });
    }
}