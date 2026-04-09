import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { uploadVideo } from "../../services/video/VideoUploadApi.js";

function VideoUpload() {
    const { values, handleChange } = useForm({
        title: "",
        file: "",
        thumbnail: "",
        theme_id: "",
        description: "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const formData = new FormData();

            formData.append("title", values.title);
            formData.append("video", values.file);
            formData.append("thumbnail", values.thumbnail);
            formData.append("description", values.description);
            formData.append("theme_id", values.theme_id);

            const result = await uploadVideo(formData);
            console.log(result);

            setMessage("Vidéo envoyée");
        } catch (error) {
            console.error("erreur:", error);
            setMessage("Erreur lors de l'envoi");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="fieldset bg-base-200 border-base-300 rounded-box w-xl border form-components"
        >
            <legend className="text-4xl font-bold text-primary">Ajouter une vidéo</legend>

            <div className="my-[10px] w-[70%]">
                <label htmlFor="title" className="label w-full my-[10px]">Titre</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={values.title}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="input input-primary w-full"
                />
            </div>

            <div className="my-[10px] w-[70%]">
                <label htmlFor="video" className="label w-full my-[10px]">Vidéo</label>
                <input
                    type="file"
                    name="file"
                    id="video"
                    accept="video/*"
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="file-input file-input-primary w-full"
                />
            </div>

            <div className="my-[10px] w-[70%]">
                <label htmlFor="thumbnail" className="label w-full my-[10px]">Miniature</label>
                <input
                    type="file"
                    name="thumbnail"
                    id="thumbnail"
                    accept="image/*"
                    onChange={handleChange}
                    disabled={loading}
                    className="file-input file-input-primary w-full"
                />
            </div>

            <div className="my-[10px] w-[70%]">
                <label htmlFor="theme" className="label w-full my-[10px]">Thème de la vidéo</label>
                <select
                    name="theme_id"
                    id="theme"
                    value={values.theme_id}
                    onChange={handleChange}
                    disabled={loading}
                    className="select select-primary w-full"
                >
                    <option value="">Choisissez le thème</option>
                </select>
            </div>

            <div className="my-[10px] w-[70%]">
                <label htmlFor="description" className="label w-full my-[10px]">Description</label>
                <textarea
                    name="description"
                    id="description"
                    value={values.description}
                    onChange={handleChange}
                    disabled={loading}
                    className="textarea textarea-primary w-full"
                />
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary mt-4">
                {loading ? "Envoi..." : "Ajouter"}
            </button>

            <p>{message}</p>
        </form>
    );
}

export default VideoUpload;