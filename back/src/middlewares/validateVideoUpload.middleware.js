import { z } from "zod";

const bodySchema = z.object({
  title: z.string().min(1, "Le titre est obligatoire").max(255),
  theme_id: z.string().max(255).optional().nullable(),
  description: z.string().max(1000).optional().nullable(),
  user_id: z.string().max(50).optional().nullable(),
});

export function validateVideoCreate(req, res, next) {
  try {
    const videoFile = req.files?.video?.[0];

    if (!videoFile) {
      return res.status(400).json({
        error: "Fichier vidéo manquant (champ: video).",
      });
    }

    const parsed = bodySchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: "Validation error",
        details: parsed.error.flatten(),
      });
    }

    req.validatedBody = parsed.data;

    next();
  } catch (err) {
    next(err);
  }
}
