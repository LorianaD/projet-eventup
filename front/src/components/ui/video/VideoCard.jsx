import { Link } from "react-router";
import { API_URL } from "../../../services/video/VideoListApi";

function VideoCard({ video }) {
    const thumbnailSrc = video.thumbnailUrl || "/imgs/default-video.jpg";

    return (
        <article className="video-card">
            <figure className="video-card__media">
                <img
                    src={thumbnailSrc}
                    alt={video.title ?? "Vidéo"}
                    className="video-card__img"
                />

                <div className="video-card__overlay"></div>

                <Link
                    to={`/videos/${video.id}`}
                    rel="noreferrer"
                    className="video-card__play btn btn-circle btn-primary"
                    aria-label={`Lire la vidéo ${video.title ?? ""}`}
                >
                    ▶
                </Link>
            </figure>

            <div className="video-card__body">
                <h3 className="video-card__title">
                    {video.title ?? "Sans titre"}
                </h3>

                {video.description ? (
                    <p className="video-card__description">
                        {video.description}
                    </p>
                ) : (
                    <p className="video-card__description video-card__description--empty">
                        Aucune description disponible.
                    </p>
                )}

                <div className="video-card__actions">
                    <Link to={`/videos/${video.id}`} className="btn btn-sm btn-primary">
                        Regarder
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default VideoCard;