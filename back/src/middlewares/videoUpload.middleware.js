// src/middlewares/uploadVideo.middleware.js
import multer from "multer";
import path from "path";

function fileFilter(req, file, cb) {
  // accepte uniquement des vidéos
  if (file.mimetype && file.mimetype.startsWith("video/")) return cb(null, true);
  return cb(new Error("Le fichier doit être une vidéo."), false);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/videos"); // assure-toi que le dossier existe
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname || "");
    const safeBase = "video";
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${safeBase}-${unique}${ext}`);
  },
});

export const uploadVideo = multer({
  storage,
  fileFilter,
  limits: { fileSize: 200 * 1024 * 1024 }, // 200MB (ajuste)
});
