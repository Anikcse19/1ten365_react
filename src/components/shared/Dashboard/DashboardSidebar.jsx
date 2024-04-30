import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { FaNotesMedical, FaPlus, FaUsersViewfinder } from "react-icons/fa6";
import { GiSettingsKnobs } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import { images } from "../../../../config";



const DashboardSidebar = () => {
  const route = useLocation();
  const navigate = useNavigate();
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(true);

  const navigation = [
    {
      href: "/dashboard/viewAdmins",
      name: "View Admins",
      icon: <FaUsersViewfinder />,
    },
    {
      href: "/dashboard/addAdmin",
      name: "Add Admins",
      icon: <FaPlus />,
    },

    {
      href: "/dashboard/createCustomerService",
      name: "Create Custom Service",
      icon: <FaNotesMedical />,
    },
  ];

  return (
    <>
      <nav className="top-0 left-0  h-screen border-r bg-white fixed w-[20%]">
        <div className="flex flex-col h-full">
          <div className="h-20 flex items-center px-8">
            <div
              onClick={() => navigate("/adminHomePage")}
              className="flex-none cursor-pointer"
            >
              <img src={images.logo} width={140} className="mx-auto" alt="" />
            </div>
          </div>
          <div className="flex-1 flex flex-col h-full overflow-auto pb-10">
            <div className="px-4 text-sm font-medium flex-1">
              {navigation.map((item, idx) => (
                <div className="overflow-hidden" key={idx}>
                  <div
                    onClick={() => {
                      navigate(`${item?.href}`);
                      setIsOpenSubMenu(true);
                    }}
                    className={`flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 cursor-pointer
                    ${route.pathname === item?.href ? "bg-gray-200" : ""}`}
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    <div>{item.name}</div>
                  </div>
                </div>
              ))}

              <div className=" overflow-hidden relative">
                <div
                  onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}
                  className={`flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 cursor-pointer
                    ${route.pathname === "config" ? "bg-gray-200" : ""}`}
                >
                  <GiSettingsKnobs />
                  <span className="flex justify-between items-center gap-4"><p>Config</p>
                  {
                    isOpenSubMenu ? <FaAngleRight/> :  <FaAngleDown/>
                  }
                  </span>
                </div>
                <div
                  className={`bg-gray-200 w-[200px] rounded-md px-4 transition-all duration-300 ease-in-out py-2 top-0 flex flex-col gap-y-3 mx-3  ${isOpenSubMenu ? "block":"hidden"} `}
                >
                  <span onClick={()=>navigate('/dashboard/config/shortcut')} className={`bg-gray-300 px-4 py-1 hover:bg-gray-700 cursor-pointer hover:text-white ${route.pathname.includes('/shortcut') && "bg-gray-700 text-white"}`}>Shortcut</span>


                  <span onClick={()=>navigate('/dashboard/config/faq')} className={`bg-gray-300 px-4 py-1 hover:bg-gray-700 cursor-pointer hover:text-white ${route.pathname.includes('/faq') && "bg-gray-700 text-white"}`}>FAQ</span>
                  <span onClick={()=>navigate('/dashboard/config/userAlert')} className={`bg-gray-300 px-4 py-1 hover:bg-gray-700 cursor-pointer hover:text-white ${route.pathname.includes('/userAlert') && "bg-gray-700 text-white"}`}>User Alert</span>
                </div>
              </div>
            </div>
            <div>
              <div
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
                className="w-[200px] bg-slate-900 hover:bg-slate-600 mx-5 text-center text-white font-bold cursor-pointer px-3 py-3 rounded-lg"
              >
                <span>Log Out</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardSidebar;
