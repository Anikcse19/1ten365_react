
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from 'react-modern-drawer';
import "react-modern-drawer/dist/index.css";
import { Link, useLocation } from "react-router-dom";
import { images } from "../../../../config";



const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useLocation();
  const { pathname } = router;

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };



  const menus = [
    { title: "হোম", url: "" },
    { title: "কাস্টমার সার্ভিস", url: "/admins/customerService" },
    { title: "ওল্ড/নিউ", url: "/faq/oldNewNumber" },
    { title: "এডমিন", url: "/admins/admin" },
    { title: "সাব-এডমিন", url: "/admins/subAdmin" },
    { title: "সুপার-এজেন্ট", url: "/admins/superAgent" },
    { title: "এজেন্ট", url: "/admins/agent" },
    { title: "ড্যাশবোর্ড", url: "/dashboard/viewAdmins" },
  ];

  return (
    <div className="">
      <button onClick={toggleDrawer} className="text-2xl">
        <GiHamburgerMenu />
      </button>

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
                      {item?.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileNav;
