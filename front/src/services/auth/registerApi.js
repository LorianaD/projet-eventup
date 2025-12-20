// Recupere l'url de l'api dans le fichier .env
const API_URL = import.meta.env.VITE_API_URL;

// logique d'instruction
export async function register(name, firstname, email, password, birth_date) {
    console.log("fonction register dans services OK");
    
    // faire la req post sur la route /api/auth/register
    const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type' : `application/json`
        },
        // passer les data au body
        body: JSON.stringify({name, firstname, email, password, birth_date}),
    });
    console.log(response);

    // pass la response json
    const data = await response.json();
    console.log(data);

    // petite gestion d'erreur
    if (!response.ok) {
        throw new Error(data.Error || "l'inscription a échoué");
    }

    return data;
}