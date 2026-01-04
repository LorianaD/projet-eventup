const API_URL = import.meta.env.VITE_API_URL;

export async function fetchVideos() {
    const response = await fetch(`${API_URL}/api/videos`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        const text = await response.text().catch(() => "");
        throw new Error(`Erreur API videos (${response.status}) ${text}`);
    }

    return response.json();
}