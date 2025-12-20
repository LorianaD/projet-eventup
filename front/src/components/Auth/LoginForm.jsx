import { useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm.js"
import { login } from "../../services/auth/loginApi.js";

function LoginForm() {
    const navigate = useNavigate();

    // on initialise le formulaire avec les champs nécessaires
    const { values, handleChange } = useForm({
        email: "",
        password: "",
    });

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Données envoyées :", values);
        login(email, password);
    }

    setTimeout(() => {
        navigate("/user");
    }, 1000);

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Votre e-mail</label>
                <input type="email" name="email" id="email" value={values.email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="password">Votre mot de passe</label>
                <input type="password" name="password" id="password" value={values.password} onChange={handleChange}/>
            </div>
            <button type="submit">Se connecter</button>
        </form>
    )
}

export default LoginForm