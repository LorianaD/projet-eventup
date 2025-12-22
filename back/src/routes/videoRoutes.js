import { Router } from "express";
import { uploadVideoController } from "../controllers/videoControllers/videoUpload.controller.js";
import { videoListController } from "../controllers/videoControllers/videoList.controller.js";
import { videoStreamController } from "../controllers/videoControllers/videoStream.controller.js";

const router = Router();

// routes en get
router.get("/", videoListController);
router.get("/:id", videoStreamController);

// route en post
router.post("/", uploadVideoController);

export default router;