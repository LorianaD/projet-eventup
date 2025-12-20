//import du service
import { register } from "../../services/authServices/register.service.js";

export async function registerController (req, res, next) {
    try {
        console.log("try dans la fonction registerController dans controllers/authControllers/register.controller.js ok");
        
        //appeler ma funciton qui contient ma logique de register
        const user = await register(req.body)

        //la response
        res.status(201).json({
            success: true,
            message:"user créé",
            data: user
        })

    } catch (error) {

        console.error('erreur lors de la creation du compte', error);
        next(error);

    }
}