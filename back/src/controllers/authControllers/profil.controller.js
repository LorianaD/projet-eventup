export async function profilController(req, res) {
    console.log(req.user);
    res.json({
        user: req.user
    });
}