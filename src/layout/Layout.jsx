import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <Menu></Menu>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;