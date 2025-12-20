import { Router } from "express";
import { testController, videoUploadController } from "../controllers/videoControllers/videoUpload.controller.js";
import { videoListController } from "../controllers/videoControllers/videoList.controller.js";
import { videoStreamController } from "../controllers/videoControllers/videoStream.controller.js";

const router = Router();

// route de test
router.get("/test", testController);

// routes en get
router.get("/", videoListController);
router.get("/:id", videoStreamController);

// route en post
router.post("/", videoUploadController);

export default router;