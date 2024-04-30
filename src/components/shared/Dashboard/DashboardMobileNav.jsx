
import { useState } from "react";
import { FaAngleDown, FaAngleRight, FaNotesMedical, FaPlus } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from 'react-modern-drawer';
import "react-modern-drawer/dist/index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { images } from "../../../../config";




const DashboardMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(true);
  const router = useLocation();
  const { pathname } = router;
  const navigate=useNavigate()
  

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const menus = [
    {
      url: "/dashboard/addAdmin",
      title: "Add Admins",
      icon: <FaPlus />,
    },
    {
      url: "/dashboard/viewAdmins",
      title: "View Admins",
      icon: <FaUsersViewfinder />,
    },
    {
      url: "/dashboard/createCustomerService",
      title: "Create Custom Service",
      icon: <FaNotesMedical />,
    },
  ];

  return (
    <div className="">
      <div className="h-[50px] w-full flex items-center justify-between px-5 shadow-md">
        <div className="flex justify-center cursor-pointer">
          <img onClick={()=>{navigate('/adminHomePage')}} width={80} height={80} src={images.logo} alt="" />
        </div>

        <button onClick={toggleDrawer} className="text-2xl">
          <GiHamburgerMenu />
        </button>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className=""
      >
        <div className="px-4 py-2">
          <div className="flex flex-col gap-y-10">
            <div className="flex justify-center cursor-pointer">
              <img onClick={()=>navigate('/adminHomePage')} width={120} height={90} src={images.logo} alt="" />
            </div>

            <div>
              <div className="flex flex-col gap-y-6">
                {menus.map((item, i) => (
                  <div key={i}>
                    <Link
                      to={item?.url}
                      className={`${
                        pathname === item?.url ? "bg-slate-100" : ""
                      } px-5 py-1 rounded-md hover:bg-slate-100`}
                    >
                      {item.title}
                    </Link>
                  </div>
                ))}

<div className=" overflow-hidden relative">
                <div
                  onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}
                  className={`flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 cursor-pointer
                    ${pathname === "config" ? "bg-gray-200" : ""}`}
                >
                  
                  <span className="flex justify-between items-center gap-4 text-black px-4"><p>Config</p>
                  {
                    isOpenSubMenu ? <FaAngleRight/> :  <FaAngleDown/>
                  }
                  </span>
                </div>
                <div
                  className={`bg-gray-200 w-[200px] rounded-md px-4 transition-all duration-300 ease-in-out py-2 top-0 flex flex-col gap-y-3 mx-3  ${isOpenSubMenu ? "block":"hidden"} `}
                >
                  <span onClick={()=>navigate('/dashboard/config/shortcut')} className={`bg-gray-300 px-4 py-1 hover:bg-gray-700 cursor-pointer hover:text-white ${pathname.includes('/shortcut') && "bg-gray-700 text-white"}`}>Shortcut</span>


                  <span onClick={()=>navigate('/dashboard/config/faq')} className={`bg-gray-300 px-4 py-1 hover:bg-gray-700 cursor-pointer hover:text-white ${pathname.includes('/faq') && "bg-gray-700 text-white"}`}>FAQ</span>
                  <span onClick={()=>navigate('/dashboard/config/userAlert')} className={`bg-gray-300 px-4 py-1 hover:bg-gray-700 cursor-pointer hover:text-white ${pathname.includes('/userAlert') && "bg-gray-700 text-white"}`}>User Alert</span>
                </div>
              </div>
              </div>
            </div>
              <div onClick={()=>{
                localStorage.removeItem('token')
                navigate('/login')
              }} className="bg-slate-900 mx-4 text-white font-bold cursor-pointer py-3 text-center rounded-md">
                <span>Logout</span>
              </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DashboardMobileNav;
