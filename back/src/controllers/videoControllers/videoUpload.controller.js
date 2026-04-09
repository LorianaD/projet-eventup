import { createVideoService } from "../../services/videoServices/video.service.js";

export function TestVideoUploadController(req, res) {
  return res.json({
    message: "test videoUploadController ok",
  });
}

export async function uploadVideoController(req, res, next) {
  try {
    const body = req.validatedBody;

    const videoFile = req.files?.video?.[0];
    const thumbnailFile = req.files?.thumbnail?.[0];

    const payload = {
      title: body.title,
      file: videoFile.originalname,
      theme_id: body.theme_id ?? null,
      description: body.description ?? null,
      type: videoFile.mimetype ?? null,
      size: String(videoFile.size ?? ""),
      path: videoFile.path.replace(/\\/g, "/"),
      thumbnail: thumbnailFile ? thumbnailFile.path.replace(/\\/g, "/") : null,
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