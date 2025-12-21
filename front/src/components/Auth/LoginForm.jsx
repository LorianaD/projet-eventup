import { useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm.js"
import { login } from "../../services/auth/loginApi.js";
import { useState } from "react";

function LoginForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // on initialise le formulaire avec les champs nécessaires
    const { values, handleChange } = useForm({
        email: "",
        password: "",
    });

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setMessage("");
        try {
            console.log("Données envoyées :", values);
            const result = await login(values.email, values.password);  
            console.log("Login result:", result);
            localStorage.setItem("token", result.token);
            navigate("/user");
        } catch (error) {
            console.error("Erreur login:", error);
            setMessage(error.message || "Connexion impossible");            
        } finally {
            setLoading(false);
        }

    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Votre e-mail</label>
                <input type="email" name="email" id="email" value={values.email} onChange={handleChange} required disabled={loading}/>
            </div>
            <div>
                <label htmlFor="password">Votre mot de passe</label>
                <input type="password" name="password" id="password" value={values.password} onChange={handleChange} required disabled={loading}/>
            </div>
            <button type="submit" disabled={loading}>
                {loading ? "Connexion..." : "Se connecter"}
            </button>
            <p>{message}</p>
        </form>
    )
}

export default LoginForm