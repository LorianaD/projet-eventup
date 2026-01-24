import { listVideosService } from "../../services/videoServices/videoList.service.js";

export async function listVideosController(req, res) {
  console.log("listVideosController ok");
  try {
    console.log("try dans controller listVideosController ok");
    
    const videos = await listVideosService(req.query);
    console.log(videos);

    return res.status(200).json({
      videos
    });

  } catch (error) {

    console.error("listVideosController error:", error);
    return res.status(500).json({
      error: "Erreur serveur",
      details: error.message
    });

  }
}