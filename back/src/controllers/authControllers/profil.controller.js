export async function profilController(req, res) {
    console.log("profilController ok");
    console.log(req.user);
    res.json({
        user: req.user
    });
}