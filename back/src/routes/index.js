import { Router } from "express";
import videoRoutes from "./videoRoutes.js";
import authRoutes from "./authRoutes.js";
import imageRoutes from "./imageRoutes.js";

const router = Router();

router.use("/video", videoRoutes);
router.use("/auth", authRoutes);
router.use("/image", imageRoutes);

export default router;