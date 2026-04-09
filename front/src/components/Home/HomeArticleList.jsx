import HomeSection from "../ui/HomeSection";

const articles = [
    {
        id: 1,
        title: "Comment partager un événement marquant ?",
        excerpt: "Découvrez comment structurer et publier vos souvenirs de manière claire, visuelle et engageante.",
    },
    {
        id: 2,
        title: "Créer une galerie d’images attractive",
        excerpt: "Quelques bonnes pratiques pour valoriser vos photos sur une plateforme moderne.",
    },
    {
        id: 3,
        title: "La vidéo au service de vos souvenirs",
        excerpt: "La vidéo permet d’apporter du rythme, de l’émotion et une immersion plus forte.",
    },
];

function HomeArticleList() {
    return (
        <HomeSection
            title="Derniers articles"
            subtitle="Des contenus pour inspirer, guider et enrichir l’expérience utilisateur."
            link="/articles"
            linkLabel="Voir tous les articles"
        >
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {articles.map((article) => (
                    <article key={article.id} className="home-card">
                        <div className="home-card__body">
                            <div className="badge badge-outline badge-secondary mb-3">
                                Article
                            </div>

                            <h3 className="home-card__title">
                                {article.title}
                            </h3>

                            <p className="home-card__text">
                                {article.excerpt}
                            </p>

                            <div className="mt-5">
                                <button className="btn btn-sm btn-ghost">
                                    Lire plus
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </HomeSection>
    );
}

export default HomeArticleList;