import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import "../../assets/styles/Layout.css"

function MainLayout() {
    return(
        <>
            < Header />
            < Outlet />
            < Footer />
        </>
    )
}

export default MainLayout