import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import "../../assets/styles/Layout.css";
import "../../assets/styles/Forms.css";

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