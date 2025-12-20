// Recupere l'url de l'api dans le fichier .env
const API_URL = import.meta.env.VITE_API_URL;

export async function login(email, password) {
    // faire la request post sur la route api/auth/login
    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, password}),
    })

    // traitement et parse de la response
    const data = await response.json();

    // traitement en cas d'erreur
    if (!response.ok) {
        throw new Error(data.Error || "echec lors de la connexion");
    }

    return data;
}