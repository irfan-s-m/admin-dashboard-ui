import { RiAdminLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdExpand } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
// import { FaRegUser } from "react-icons/fa";
import userImage from '../../public/noavatar.png'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar w-full p-5 flex items-center justify-between font-semibold text-lg">
            <div className="flex gap-1">
                <RiAdminLine className="text-2xl"></RiAdminLine>
                <Link><span>Irfan</span></Link>
            </div>
            <div className="flex items-center gap-3">
                <div>
                    <IoSearch></IoSearch>
                </div>
                <div>
                    <AiOutlineAppstore></AiOutlineAppstore>
                </div>
                <div>
                    <IoMdExpand></IoMdExpand>
                </div>
                <div className="flex justify-center items-center">
                    <IoIosNotifications></IoIosNotifications>
                    <span className="w-3 relative bottom-4 bg-red-600 rounded-lg">1</span>
                </div>
                <div className="flex items-center gap-1">
                    <img className="w-5 rounded-full object-cover" src={userImage} alt="" />
                    <span>Admin</span>
                </div>
                <div>
                    <IoSettingsOutline></IoSettingsOutline>
                </div>
            </div>
        </div>
    );
};

export default Navbar;