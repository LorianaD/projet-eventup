function HomeHero() {
    return(
        <section className="place-content-center place-items-center gap-[24px] my-[30px]" >
            <h1>Bienvenue sur</h1>
            <div className="w-[200px]">
                <img src="./src/assets/imgs/logo.png" alt="EVENTIA" className="w-full" />
            </div>
            <div className="place-content-center place-items-center">
                <p>Partagez vos moments, découvrir l'avenir.</p>                
            </div>
        </section>
    )
}

export default HomeHero;