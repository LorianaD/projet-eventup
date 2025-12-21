import { Link, useNavigate } from "react-router"

function Header() {

    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token");
    
    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return(
        <header>
            <div>
                <img alt="logo" />
            </div>
            <div>
                {/* SEARCH */}
            </div>
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link><li>Vidéo</li></Link>
                    <Link><li>Images</li></Link>
                    {isLoggedIn ? (
                        <Link to="/upload"><li>Upload</li></Link>
                    ) : (
                        ""
                    )}
                    
                    {!isLoggedIn ? (
                        <Link to="/login"><li>Connexion</li></Link>
                    ) : (
                        <li onClick={handleLogout}>Déconnexion</li>
                    )}  
                </ul>
            </nav>
        </header>
    )
}

export default Header