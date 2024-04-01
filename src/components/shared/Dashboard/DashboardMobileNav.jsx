
import { useState } from "react";
import { FaNotesMedical, FaPlus } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from 'react-modern-drawer';
import "react-modern-drawer/dist/index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { images } from "../../../../config";




const DashboardMobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="flex justify-center">
          <img onClick={()=>{navigate('/')}} width={80} height={80} src={images.logo} alt="" />
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
            <div className="flex justify-center">
              <img width={120} height={90} src={images.logo} alt="" />
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
