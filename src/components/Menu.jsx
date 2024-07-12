import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { LuUsers } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineBorderColor } from "react-icons/md";
import { BsPostcard } from "react-icons/bs";
import { LiaElementor } from "react-icons/lia";
import { CgNotes } from "react-icons/cg";
import { FaWpforms } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineBackup } from "react-icons/md";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { TbLogs } from "react-icons/tb";

const Menu = () => {
    return (
        <div className="pl-5 flex flex-col gap-4">
            <div className="main flex flex-col gap-2">
                <span className="text-textSoftColor">Main</span>
                <Link to='/' className="flex gap-2 items-center pl-3 hover:bg-softBg rounded-lg">
                    <IoHomeOutline></IoHomeOutline>
                    <span>
                        Home
                    </span></Link>
                <Link to='profile' className="flex gap-2 items-center pl-3 hover:bg-softBg rounded-lg">
                    <CgProfile></CgProfile>
                    <span>
                        Profile
                    </span></Link>
            </div>
            <div className="Lists flex flex-col gap-2">
                <span className="text-textSoftColor">Lists</span>
                <Link to='/users' className="flex gap-2 items-center pl-3 hover:bg-softBg rounded-lg">
                    <LuUsers></LuUsers>
                    <span>
                        Users
                    </span></Link>
                <Link to='products' className="flex gap-2 items-center pl-3 hover:bg-softBg rounded-lg">
                    <IoCartOutline></IoCartOutline>
                    <span>
                        Products
                    </span></Link>
                <Link to='/orders' className="flex gap-2 items-center pl-3 hover:bg-softBg rounded-lg">
                    <MdOutlineBorderColor></MdOutlineBorderColor>
                    <span>
                        Orders
                    </span></Link>
                <Link to='posts' className="flex gap-2 items-center pl-3 hover:bg-softBg rounded-lg">
                    <BsPostcard></BsPostcard>
                    <span>
                        Posts
                    </span></Link>
            </div>
            <div className="general flex flex-col gap-2">
                <span className="text-textSoftColor">General</span>
                <Link to='/' className="flex gap-2 items-center pl-3 hover:bg-softBg rounded-lg">
                    <LiaElementor></LiaElementor>
                    <span>
                        Elements
                    </span></Link>
                <Link to='notes' className="flex gap-2 items-center pl-3 hover:bg-softBg rounded-lg">
                    <CgNotes></CgNotes>
                    <span>
                        Notes
                    </span></Link>
                <Link to='/' className="flex gap-2 items-center pl-3 hover:bg-softBg rounded-lg">
                    <FaWpforms></FaWpforms>
                    <span>
                        Forms
                    </span></Link>
                <Link to='Profile' className="flex gap-2 items-center pl-3 hover:bg-softBg rounded-lg">
                    <FaRegCalendarAlt></FaRegCalendarAlt>
                    <span>
                        Calendar
                    </span></Link>
            </div>
            <div className="maintenance flex flex-col gap-2">
                <span className="text-textSoftColor">Maintenance</span>
                <Link to='/' className="flex gap-2 items-center pl-3 hover:bg-softBg rounded-lg">
                    <IoSettingsOutline></IoSettingsOutline>
                    <span>
                        Settings
                    </span></Link>
                <Link to='notes' className="flex gap-2 items-center pl-3 hover:bg-softBg rounded-lg">
                    <MdOutlineBackup></MdOutlineBackup>
                    <span>
                        Backups
                    </span></Link>
            </div>
            <div className="analytics flex flex-col gap-2">
                <span className="text-textSoftColor">Analytics</span>
                <Link to='/' className="flex gap-2 items-center pl-3 hover:bg-softBg rounded-lg">
                    <HiOutlineChartSquareBar></HiOutlineChartSquareBar>
                    <span>
                        Charts
                    </span></Link>
                <Link to='Profile' className="flex gap-2 items-center pl-3 hover:bg-softBg rounded-lg">
                    <TbLogs></TbLogs>
                    <span>
                        Logs
                    </span></Link>
            </div>
        </div>
    );
};

export default Menu;