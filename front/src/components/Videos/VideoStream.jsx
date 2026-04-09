import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchVideos } from "../../services/video/VideoListApi";
import { API_URL } from "../../services/video/VideoListApi";

function VideoStream() {
    const { id } = useParams();

    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        async function loadVideo() {
            try {
                setLoading(true);
                setErrorMsg("");

                const data = await fetchVideos();
                const list = Array.isArray(data) ? data : (data.videos ?? []);

                const found = list.find(v => String(v.id) === id);

                if (!found) {
                    throw new Error("Vidéo introuvable");
                }

                setVideo(found);

            } catch (error) {
                setErrorMsg(error.message);
            } finally {
                setLoading(false);
            }
        }

        loadVideo();
    }, [id]);

    if (loading) {
        return (
            <section className="video-page">
                <div className="video-page__container">
                    <p>Chargement…</p>
                </div>
            </section>
        );
    }

    if (errorMsg) {
        return (
            <section className="video-page">
                <div className="video-page__container">
                    <p>{errorMsg}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="video-page">
            <div className="video-page__container">

                <div className="video-stream">
                    <div className="video-stream__media">
                        {/* Placeholder pour l’instant */}
                        <video controls className="video-stream__video">
                            <source src={`${API_URL}/api/video/${video.id}`} type={video.type || "video/mp4"} />
                            Votre navigateur ne supporte pas la lecture vidéo.
                        </video>
                    </div>

                    <div className="video-stream__content">
                        <h1 className="video-stream__title">
                            {video.title}
                        </h1>

                        {video.description && (
                            <p className="video-stream__description">
                                {video.description}
                            </p>
                        )}
                    </div>

                </div>

            </div>
        </section>
    );
}

export default VideoStream;