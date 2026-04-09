import { Link } from "react-router";

function HomeSection({ title, subtitle, link, linkLabel = "Voir tout", children }) {
    return (
        <section className="home-section">
            <div className="home-section__header">
                <div className="home-section__title-box">
                    <h2 className="home-section__title">{title}</h2>
                    {subtitle ? <p className="home-section__subtitle">{subtitle}</p> : null}
                </div>

                {link ? (
                    <Link to={link} className="btn btn-outline btn-sm">
                        {linkLabel}
                    </Link>
                ) : null}
            </div>

            <div className="home-section__content">
                {children}
            </div>
        </section>
    );
}

export default HomeSection;