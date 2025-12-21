import { Link, useNavigate } from "react-router"

function Header() {

    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token");
    
    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return(
        <header className="navbar bg-base-100 shadow-sm px-2">
            {/* TITRE DU SITE / LOGO */}
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost px-2">
                    <img alt="logo" className="h-8 w-auto"/>
                </Link>
            </div>
            {/* SEARCH */}
            <div className="navbar-center">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto input-primary"/>
            </div>
            {/* MENU */}
            <nav className="navbar-end flex items-center gap-2">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link>Vidéo</Link></li>
                    <li><Link>Images</Link></li>
                    <li><Link>Sons</Link></li>
                </ul>

                <div className="dropdown dropdown-end">
                    <div role="button" tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="./src/assets/imgs/icons-user.png"
                            />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 p-2 shadow">
                        {!isLoggedIn ? (
                            <li><Link to="login">Connexion</Link></li>
                        ) : (
                            <>
                                <li><Link to="/upload">Ajoutér une vidéo</Link></li>
                                <li><Link>Ajouter une image</Link></li>
                                <li><Link>Ajouter un son</Link></li>
                            
                                <button type="button" onClick={handleLogout}>Déconnexion</button>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header