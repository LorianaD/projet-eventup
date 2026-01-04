import { createVideoService } from "../../services/videoServices/video.service.js";

export function TestVideoUploadController(req, res) {
  
  return res.json({
    message: "test videoUploadController ok"
  })
}

export async function uploadVideoController(req, res, next) {
  try {
    const body = req.validatedBody;

    const payload = {
      title: body.title,
      file: req.file.originalname,
      theme_id: body.theme_id ?? null,
      description: body.description ?? null,
      type: req.file.mimetype ?? null,
      size: String(req.file.size ?? ""),
      path: req.file.path,
      user_id: body.user_id ?? null,
    };

    const created = await createVideoService(payload);

    return res.status(201).json({
      message: "Vidéo créée",
      video: created,
    });
  } catch (err) {
    next(err);
  }
}