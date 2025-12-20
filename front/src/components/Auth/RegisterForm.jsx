import { useState } from "react";
import { useNavigate } from "react-router"
import {register} from "../../services/auth/registerApi.js"
import { useForm } from "../../hooks/useForm.js";

function RegisterForm() {
    const navigate = useNavigate();

    const { values, handleChange } = useForm({
        name: "",
        firstname: "",
        email: "",
        password: "",
        birth_date: "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        console.log("fonction handleSubmit dans RegisterForm OK");
        
        event.preventDefault();
        setLoading(true);

        try {
            console.log("try dans fonction handleSubmit est OK");
            
            const result = await register(
                values.name,
                values.firstname,
                values.email,
                values.password,
                values.birth_date
            );

            console.log(result);
            setMessage("Super ! Inscription réussie.");

            setTimeout(() => {
                navigate("/login");
            }, 1000);

        } catch (error) {

            console.error("erreur:", error);
            setMessage("Erreur lors de l'inscription");

        } finally {

            setLoading(false);

        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" id="name" value={values.name} onChange={handleChange} required disabled={loading}/>
            </div>
            <div>
                <label htmlFor="firstname">Prénom</label>
                <input type="text" name="firstname" id="firstname" value={values.firstname} onChange={handleChange} required disabled={loading}/>
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" value={values.email} onChange={handleChange} required disabled={loading}/>
            </div>
            <div>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" value={values.password} onChange={handleChange} required disabled={loading}/>
            </div>
            <div>
                <label htmlFor="birth_date">Date de naissance</label>
                <input type="date" name="birth_date" id="birth_date" value={values.birth_date} onChange={handleChange} required disabled={loading}/>
            </div>
            <button type="submit">S'enregistrer</button>
            <p>{message}</p>
        </form>
    )
}

export default RegisterForm