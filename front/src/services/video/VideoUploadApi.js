// Recupere l'url de l'api dans le fichier .env
const API_URL = import.meta.env.VITE_API_URL;

export async function uploadVideos(files) {
    console.log("la fonction uploadVideos marche");
    

    const formData = new FormData();
    console.log(formData);

    formData.append("file", files[0]);

    formData.append("upload_preset", "<your upload preset>");

    fetch(`${API_URL}/video/`, {
        method: "POST",
        body: formData,
    })

    const data = await response.json();
    console.log(data);

    return data;

}