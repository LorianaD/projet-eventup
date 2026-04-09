import HomeSection from "../ui/HomeSection";

const images = [
    {
        id: 1,
        src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
        alt: "Image 1",
    },
    {
        id: 2,
        src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
        alt: "Image 2",
    },
    {
        id: 3,
        src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
        alt: "Image 3",
    },
    {
        id: 4,
        src: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
        alt: "Image 4",
    },
];

function HomeImageList() {
    return (
        <HomeSection
            title="Dernières images"
            subtitle="Une sélection visuelle des derniers contenus publiés."
            link="/images"
            linkLabel="Voir toutes les images"
        >
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {images.map((image) => (
                    <article key={image.id} className="home-card overflow-hidden">
                        <figure className="aspect-4/3 w-full overflow-hidden bg-base-200">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="h-full w-full object-cover transition duration-300 hover:scale-105"
                            />
                        </figure>
                    </article>
                ))}
            </div>
        </HomeSection>
    );
}

export default HomeImageList;