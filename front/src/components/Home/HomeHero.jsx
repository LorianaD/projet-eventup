import logo from "../../assets/imgs/logo.png";

function HomeHero() {
    return(
        <section className="place-content-center place-items-center gap-6 my-8" >
            <h1>Bienvenue sur</h1>
            <div className="w-50">
                <img src={ logo } alt="EVENTIA" className="w-full" />
            </div>
            <div className="place-content-center place-items-center">
                <p>Partagez vos moments, découvrir l'avenir.</p>                
            </div>
        </section>
    )
}

export default HomeHero;