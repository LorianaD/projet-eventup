import LoginForm from "../components/Auth/LoginForm"

function LoginPage() {
    return(
        <main className="place-content-center place-items-center">
            <section className="my-[30px] text-center">
                <h2 className="text-4xl font-bold text-primary my-[20px]">Connexion</h2>
                <LoginForm/>                
            </section>
        </main>
    )
}

export default LoginPage