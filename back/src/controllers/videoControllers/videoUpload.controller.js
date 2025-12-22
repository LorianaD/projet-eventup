export function TestVideoUploadController(req, res) {
  
  return res.json({
    message: "test videoUploadController ok"
  })
}

export async function uploadVideoController(req, res) {
  try {

    console.log("try dans la fonction uploadVideoController OK");
    
    if (!req.file) {
      res.status(400).json({
        error: "Aucun fichier reçu (champ 'video')"
      });
      return;
    }

    const title = req.body.title;
    const description = req.body.description;
    console.log(title, description);

    const videoData = {
      title: title,
      description: description,
      filename: req.file.filename,
      original_name: req.file.originalname,
      mime_type: req.file.mimetype,
      size: req.file.size,
      path: req.file.path,
    };
    console.log(videoData);
    
    const created = await createVideo(videoData);
    console.log(created);
    

    res.status(201).json({
      message: "Upload vidéo OK",
      video: created,
    });

  } catch (error) {

    // Gestion erreurs Multer (type / size)
    if (error.code === "LIMIT_FILE_SIZE") {
      res.status(413).json({
        error: "Fichier trop volumineux"
      });
      return;
		}

    if (error.message === "TYPE_NOT_ALLOWED") {
      res.status(415).json({
        error: "Type vidéo refusé (mp4/webm/mov)"
      });
      return;
    }

    res.status(500).json({
      error: "Erreur serveur",
      details: error.message
    });

  }
}
