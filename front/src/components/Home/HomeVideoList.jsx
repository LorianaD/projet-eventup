import { useEffect, useState } from "react";
import { fetchVideos, API_URL } from "../../services/video/VideoListApi.js";
import HomeSection from "../ui/HomeSection.jsx";

function HomeVideoList() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        let isMounted = true;

        async function load() {
            try {
                setLoading(true);
                setErrorMsg("");

                const data = await fetchVideos();
                const list = Array.isArray(data) ? data : (data?.videos ?? []);
                const firstFive = list.slice(0, 5);

                if (isMounted) {
                    setVideos(firstFive);
                }
            } catch (err) {
                if (isMounted) {
                    setErrorMsg(err?.message || "Erreur inconnue");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        load();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <HomeSection
            title="Dernières vidéos"
            subtitle="Découvrez les contenus récemment partagés sur la plateforme."
            link="/videos"
            linkLabel="Voir toutes les vidéos"
        >
            {loading ? (
                <div className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm">
                    <span className="loading loading-spinner loading-md"></span>
                    <p>Chargement des vidéos…</p>
                </div>
            ) : errorMsg ? (
                <div className="alert alert-error">
                    <span>Les vidéos seront bientôt disponibles.</span>
                </div>
            ) : videos.length === 0 ? (
                <div className="alert">
                    <span>Aucune vidéo pour le moment.</span>
                </div>
            ) : (
                <div className="home-horizontal-list">
                    {videos.map((video) => (
                        <article key={video.id} className="home-card min-w-[320px] max-w-95 shrink-0">
                            <figure className="home-media">
                                <video className="h-full w-full object-cover" controls preload="metadata" poster={video.thumbnail || "/imgs/default-video.jpg"} src={`${API_URL}/api/video/${video.id}`}/>
                            </figure>

                            <div className="home-card__body">
                                <h3 className="home-card__title">
                                    {video.title ?? "Sans titre"}
                                </h3>

                                <p className="home-card__text">
                                    {video.theme ? `Thème : ${video.theme}` : "Vidéo récemment ajoutée"}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </HomeSection>
    );
}

export default HomeVideoList;