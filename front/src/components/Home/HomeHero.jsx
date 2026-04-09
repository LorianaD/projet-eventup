import { Link } from "react-router";
import logo from "../../assets/imgs/logo.png";

function HomeHero() {
    return (
        <section className="home-hero">
            <div className="home-hero__content">
                <div className="badge badge-outline badge-primary home-hero__badge">
                    Plateforme de partage multimédia
                </div>

                <h1 className="home-hero__title">
                    Bienvenue sur <span className="text-primary">EVENTIA</span>
                </h1>

                <p className="home-hero__text">
                    Partagez vos moments, découvrez des vidéos, des images et des articles
                    dans un espace moderne, fluide et inspirant.
                </p>

                <div className="home-hero__actions">
                    <Link to="/videos" className="btn btn-primary">
                        Découvrir les vidéos
                    </Link>
                    <Link to="/images" className="btn btn-outline btn-primary">
                        Explorer les images
                    </Link>
                </div>
            </div>

            <div className="home-hero__visual">
                <div className="home-hero__logo-box">
                    <img src={logo} alt="Logo EVENTIA" className="home-hero__logo" />
                </div>
            </div>
        </section>
    );
}

export default HomeHero;