
import { FaQuestion } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const router = useLocation();
  const { pathname } = router;

  const token=localStorage.getItem('token')
  

  return (
    <div className="w-full">
      <div className="w-[95%] mx-auto bg-gray-200  py-1">
        <div className="flex justify-center gap-2 lg:gap-5 w-full">
          <Link
            className={`text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded flex items-center gap-1 ${
              pathname == "/" && "bg-gray-900 text-white"
            }`}
            to="/"
          >
            <IoMdHome/>
            হোম
          </Link>
          <Link
            className={`text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded flex items-center gap-1 ${
              pathname == "/admins/customerService" && "bg-gray-900 text-white"
            }`}
            to="/admins/customerService"
          >
            <FaQuestion/>
            কাস্টমার সার্ভিস
          </Link>

          <Link
            className={`${
              pathname === "/faq/oldNewNumber" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded flex items-center gap-1`}
            to="/faq/oldNewNumber"
          >
            <IoSettings/>
            ওল্ড/নিউ
          </Link>
          <Link
            className={`${
              pathname === "/admins/admin" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded flex items-center gap-1`}
            to="/admins/admin"
          >
             <IoSettings/>
            এডমিন
          </Link>
          <Link
            className={`${
              pathname === "/admins/subAdmin" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded flex items-center gap-1`}
            to="/admins/subAdmin"
          >
             <IoSettings/>
            সাব-এডমিন
          </Link>
          <Link
            className={`${
              pathname === "/admins/superAgent" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded flex items-center gap-1`}
            to="/admins/superAgent"
          >
             <IoSettings/>
            সুপার-এজেন্ট
          </Link>
          <Link
            className={`${
              pathname === "/admins/agent" && "bg-gray-900 text-white"
            } text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded  flex items-center gap-1`}
            to="/admins/agent"
          >
             <IoSettings/>
            এজেন্ট
          </Link>

          {token && (
            <Link
              className="text-base md:text-xl font-bold  text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded flex items-center gap-1"
              to="/dashboard/viewAdmins"
            >
              <MdDashboard/>
              ড্যাশবোর্ড
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
