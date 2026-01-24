import { useEffect, useState } from "react";
import { fetchVideos } from "../../services/video/VideoListApi.js";
import { Link } from "react-router";

function HomeVideoList() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {

        let isMounted = true;
        console.log(isMounted); 

        async function load() {
            try {
                console.log("try dans HomevideoList useEffect ok");
                
                setLoading(true);
                setErrorMsg("");

                const data = await fetchVideos();
                const list = Array.isArray(data) ? data : (data?.videos ?? []);

                // on garde seulement 5 vidéos (les 5 premières)
                const firstFive = list.slice(0, 5);

                if (isMounted) setVideos(firstFive);

            } catch (err) {

                if (isMounted) setErrorMsg(err?.message || "Erreur inconnue");

            } finally {

                if (isMounted) setLoading(false);

            }
        }

        load();
        return () => { isMounted = false; };

    }, []);

    if (loading) {

        return (
            <section className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Dernières vidéos</h2>
                <div className="flex items-center gap-3">
                <span className="loading loading-spinner loading-md"></span>
                <p>Chargement des vidéos…</p>
                </div>
            </section>
        );
    }

    if (errorMsg) {
        return (
            <section className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Dernières vidéos</h2>
                <div className="alert alert-error">
                <span>Impossible de charger la liste : {errorMsg}</span>
                </div>
            </section>
        );
    }

    if (videos.length === 0) {
        return (
        <section className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Dernières vidéos</h2>
            <div className="alert">
            <span>Aucune vidéo pour le moment.</span>
            </div>
        </section>
        );
    }

    return (
        <section className="p-6">
            <div className="flex items-end justify-between mb-4">
                <h2 className="text-2xl font-semibold">Dernières vidéos</h2>
                <Link to="/videos" className="btn btn-sm btn-outline">Voir tout</Link>
            </div>

            <div className="carousel w-full rounded-box bg-base-100">
                {videos.map((v, index) => {
                    const slideId = `slide${index + 1}`;
                    const prevId = `slide${index === 0 ? videos.length : index}`;
                    const nextId = `slide${index === videos.length - 1 ? 1 : index + 2}`;

                    return (
                        <div
                            key={v.id}
                            id={slideId}
                            className="carousel-item relative w-full"
                        >
                        <div className="w-full p-4">
                            <div className="card bg-base-100 shadow">
                            <figure className="aspect-video bg-base-200">
                                <video
                                    className="h-full w-full object-cover"
                                    controls
                                    preload="metadata"
                                    src={`http://localhost:3000/api/video/${v.id}/stream`}
                                />
                            </figure>

                            <div className="card-body p-4">
                                <h3 className="card-title">{v.title ?? "Sans titre"}</h3>
                                {v.theme ? (
                                    <p className="text-sm opacity-70">Thème : {v.theme}</p>
                                ) : null}
                            </div>
                            </div>
                        </div>

                        <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
                            <a href={`#${prevId}`} className="btn btn-circle">❮</a>
                            <a href={`#${nextId}`} className="btn btn-circle">❯</a>
                        </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default HomeVideoList;