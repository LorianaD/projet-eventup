import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchVideos } from "../../services/video/VideoListApi.js";

function VideoList() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        let isMounted = true;

        async function load() {

            console.log("fonction load dans VideoList OK");

            try {

                console.log("try dans la la fonction load dans VideoList OK");
                
                setLoading(true);
                setErrorMsg("");

                const data = await fetchVideos();
                console.log(data);
                
                const list = Array.isArray(data) ? data : (data.videos ?? []);
                console.log(list);

                if (isMounted) setVideos(list);

            } catch (err) {

                if (isMounted) setErrorMsg(err?.message || "Erreur inconnue");

            } finally {

                if (isMounted) setLoading(false);

            }
        }

        load();

        return () => {

            isMounted = false;

        };
        
    }, []);

    if (loading) {
        return (
            <section className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Vidéos</h2>
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
                    <h2 className="text-2xl font-semibold mb-4">Vidéos</h2>

                    <div className="alert alert-error">
                    <span>Impossible de charger la liste : {errorMsg}</span>
                    </div>

                    <button
                    type="button"
                    className="btn btn-outline mt-4"
                    onClick={() => window.location.reload()}
                    >
                    Réessayer
                    </button>
            </section>
        );
    }

    return (
        <section className="p-6 bg-white bg-transparent w-[80%]">
            <div className="flex items-end justify-between mb-4">
                <h2 className="text-2xl font-semibold">Toutes les vidéos</h2>
            </div>

            {videos.length === 0 ? (
                <div className="alert">
                    <span>Aucune vidéo pour le moment.</span>
                </div>
            ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {videos.map((v) => (
                        <div key={v.id} className="card bg-base-100 shadow">
                            <figure className="aspect-video bg-base-200">
                                {v.thumbnailUrl ? (
                                    <img
                                        src={v.thumbnailUrl}
                                        alt={v.title ?? "video"}
                                        className="h-full w-full object-cover"
                                    />
                                    ) : (
                                    <video
                                        className="h-full w-full object-cover"
                                        controls
                                        preload="metadata"
                                        // adapte si ton endpoint stream est différent
                                        src={`http://localhost:3000/api/video/${v.id}/stream`}
                                    />
                                )}
                            </figure>

                            <div className="card-body p-4">
                                <h3 className="card-title text-base line-clamp-1">
                                    {v.title ?? "Sans titre"}
                                </h3>
                                {v.description ? (
                                    <p className="text-sm opacity-70 line-clamp-2">{v.description}</p>
                                ) : null}

                                <div className="card-actions justify-end">
                                    {/* route détail : adapte selon ton router */}
                                    {/* <Link to={`/videos/${v.id}`} className="btn btn-sm btn-outline">
                                        Voir
                                    </Link> */}
                                    <a
                                        href={`http://localhost:3000/api/video/${v.id}/stream`}
                                        className="btn btn-sm btn-primary"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                    Stream
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default VideoList;