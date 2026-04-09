import { Router } from "express";
import { uploadVideoController } from "../controllers/videoControllers/videoUpload.controller.js";
import { listVideosController } from "../controllers/videoControllers/videoList.controller.js";
import { videoStreamController } from "../controllers/videoControllers/videoStream.controller.js";
import { uploadVideo } from "../middlewares/videoUpload.middleware.js";
import { validateVideoCreate } from "../middlewares/validateVideoUpload.middleware.js";

const router = Router();

// routes en get
router.get("/", listVideosController);
router.get("/:id", videoStreamController);

// route en post
router.post("/", uploadVideo.fields([ { name: "video", maxCount: 1 }, { name: "thumbnail", maxCount: 1 } ]), validateVideoCreate, uploadVideoController);

export default router;