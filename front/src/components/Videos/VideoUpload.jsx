import { useState } from "react";
import { useForm } from "../../hooks/useForm";

function VideoUpload() {
    const { values, handleChange } = useForm({
        title: "",
        file:"",
        theme_id:"",
        description:"",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        console.log("fonction handleSubmit dans VideoUpload OK");
        
        event.preventDefault();
        setLoading(true);

        try {
            console.log("try dans fonction handleSubmit est OK");
            
            const result = await register(
                values.title,
                values.file,
                values.theme_id,
                values.description
            );

            console.log(result);
            setMessage("Super ! Inscription réussie.");

            // setTimeout(() => {
            //     navigate("/profil");
            // }, 1000);

        } catch (error) {

            console.error("erreur:", error);
            setMessage("Erreur lors de l'inscription");

        } finally {

            setLoading(false);

        }
    }

    return(
        <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xl border form-components">
            <legend className="text-4xl font-bold text-primary">Ajouter une vidéo</legend>
            <div className="my-[10px] w-[70%]">
                <label htmlFor="title" className="label w-full my-[10px]">Titre</label>
                <input type="text" name="title" id="title" value={values.title} onChange={handleChange} required disabled={loading} className="input input-primary w-full" />                
            </div>
            <div className="my-[10px] w-[70%]">
                <label htmlFor="video" className="label w-full my-[10px]">Vidéo</label>
                <input type="file" name="video" id="video" value={values.file} onChange={handleChange} required disabled={loading} className="file-input file-input-primary w-full" />
            </div>
            <div className="my-[10px] w-[70%]">
                <label htmlFor="theme" className="label w-full my-[10px]">Théme de la vidéo</label>
                <select name="theme" id="theme" className="select select-primary w-full">
                    <option value="">Choigisez le théme</option>
                </select>
            </div>
            <div className="my-[10px] w-[70%]">
                <label htmlFor="description" className="label w-full my-[10px]">Déscription</label>
                <textarea name="description" id="description" value={values.description} onChange={handleChange} disabled={loading} className="input input-primary w-full"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
                Ajouter
            </button>
            <p>{message}</p>
        </form>
    )
}

export default VideoUpload