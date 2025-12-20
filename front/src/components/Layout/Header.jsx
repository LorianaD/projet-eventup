import { Link } from "react-router"

function Header() {
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
                    <Link to="/upload"><li>Upload</li></Link>
                    <Link to="/login"><li>Connection</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header