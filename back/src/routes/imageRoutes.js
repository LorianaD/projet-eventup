import { Router } from "express";
import { imageViewController } from "../controllers/imageControllers/imageView.controller.js";
import { imageListController } from "../controllers/imageControllers/imageList.controller.js";
import { imageUploadController } from "../controllers/imageControllers/imageUpload.controller.js";


const router = Router();

// routes en get
router.get("/", imageListController);
router.get("/:id", imageViewController);

// route en post
router.post("/", imageUploadController);

export default router;