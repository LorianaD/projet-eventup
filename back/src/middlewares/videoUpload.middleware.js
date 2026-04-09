// src/middlewares/uploadVideo.middleware.js
import multer from "multer";
import path from "path";
import fs from "fs";

function fileFilter(req, file, cb) {
  if (file.fieldname === "video") {
    if (file.mimetype && file.mimetype.startsWith("video/")) {
      return cb(null, true);
    }
    return cb(new Error("Le fichier envoyé dans 'video' doit être une vidéo."), false);
  }

  if (file.fieldname === "thumbnail") {
    if (file.mimetype && file.mimetype.startsWith("image/")) {
      return cb(null, true);
    }
    return cb(new Error("Le fichier envoyé dans 'thumbnail' doit être une image."), false);
  }

  return cb(new Error("Champ fichier non autorisé."), false);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "uploads/videos";

    if (file.fieldname === "thumbnail") {
      folder = "uploads/thumbnails";
    }

    fs.mkdirSync(folder, { recursive: true });
    cb(null, folder);
  },

  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname || "");
    const safeBase = file.fieldname === "thumbnail" ? "thumbnail" : "video";
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${safeBase}-${unique}${ext}`);
  },
});

export const uploadVideo = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 200 * 1024 * 1024,
  },
});