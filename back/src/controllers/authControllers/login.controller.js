import { login } from "../../services/authServices/login.service.js";

export async function loginController(req, res) {
    try {
        console.log("try dans loginController dans controllers/authControllers/login.controller.js OK");
        
        const { email, password } = req.body;

        const result = await login(email, password);
        console.log(result);

        if (!result.ok) {
            return res.status(result.status).json({ error: result.error });
        }

        return res.json({ token: result.token, user: result.user });

    } catch (error) {

        console.error("loginController error:", error);

        return res.status(500).json({ error: "Erreur serveur" });
    }
}