import { Link, useNavigate } from "react-router";
import logo from "../../assets/imgs/logo.png";

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
            <div className="navbar-start rounded-full">
                <Link to="/" className="btn btn-ghost px-2 rounded-full">
                    <img src={ logo } alt="logo" className="h-10 w-auto"/>
                </Link>
            </div>
            {/* SEARCH */}
            <div className="navbar-center">
                <label className="input input-primary">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className="grow" placeholder="Search" />
                </label>
            </div>
            {/* MENU */}
            <nav className="navbar-end flex items-center gap-2">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className="hover:bg-primary hover:text-primary-content">Home</Link></li>
                    <li><Link className="hover:bg-primary hover:text-primary-content">Evenement</Link></li>
                    <li><Link to="/videos" className="hover:bg-primary hover:text-primary-content">Vidéo</Link></li>
                    <li><Link to="/images" className="hover:bg-primary hover:text-primary-content">Images</Link></li>
                    <li><Link className="hover:bg-primary hover:text-primary-content">Sons</Link></li>
                </ul>

                <div className="dropdown dropdown-end">
                    <div role="button" tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="../src/assets/imgs/icons-user.png"
                            />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 p-2 shadow">
                        {!isLoggedIn ? (
                            <li><Link to="login">Connexion</Link></li>
                        ) : (
                            <>
                                <li><Link to="/videos/upload">Ajoutér une vidéo</Link></li>
                                <li><Link to="/images/upload">Ajouter une image</Link></li>
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