import { useEffect, useState } from "react";
import { fetchVideos } from "../../services/video/VideoListApi.js";
import VideoGrid from "../ui/video/VideoGrid.jsx";

function VideoList() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        let isMounted = true;

        async function loadVideos() {
            try {
                setLoading(true);
                setErrorMsg("");

                const data = await fetchVideos();
                const list = Array.isArray(data) ? data : (data.videos ?? []);

                if (isMounted) {
                    setVideos(list);
                }
            } catch (error) {
                if (isMounted) {
                    setErrorMsg(error?.message || "Erreur inconnue");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        loadVideos();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <section className="video-page">
            <div className="video-page__container">
                <header className="video-page__header">
                    <p className="video-page__eyebrow">Galerie vidéo</p>
                    <h2 className="video-page__title">Toutes les vidéos</h2>
                    <p className="video-page__subtitle">
                        Découvrez les vidéos disponibles sur la plateforme.
                    </p>
                </header>

                {loading && (
                    <div className="video-page__state video-page__state--loading">
                        <span className="loading loading-spinner loading-md"></span>
                        <p>Chargement des vidéos…</p>
                    </div>
                )}

                {!loading && errorMsg && (
                    <div className="video-page__state video-page__state--error">
                        <p>Les vidéos seront bientôt disponibles.</p>
                        <button
                            type="button"
                            className="btn btn-outline mt-4"
                            onClick={() => window.location.reload()}
                        >
                            Réessayer
                        </button>
                    </div>
                )}

                {!loading && !errorMsg && videos.length === 0 && (
                    <div className="video-page__state video-page__state--empty">
                        <p>Aucune vidéo pour le moment.</p>
                    </div>
                )}

                {!loading && !errorMsg && videos.length > 0 && (
                    <VideoGrid videos={videos} />
                )}
            </div>
        </section>
    );
}

export default VideoList;