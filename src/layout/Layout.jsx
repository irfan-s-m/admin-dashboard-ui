import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <div className="bg-mainBg text-textMainColor">
            <Navbar />
            <div className="flex">
                <div className="w-64 pt-1 pr-5 border-r-2 border-softBg">
                    <Menu></Menu>
                </div>
                <div className="w-full pt-1 pr-5">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;