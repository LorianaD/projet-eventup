export function videoUploadController(req, res) {
  
  return res.json({
    message: "test videoUploadController ok"
  })
}


export function testController(req, res) {
  return res.json({
    ok: true,
    message: "Route /api/video/test OK",
  });
}