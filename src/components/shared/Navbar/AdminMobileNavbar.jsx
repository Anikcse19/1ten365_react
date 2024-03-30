import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { images } from "../../../../config";

const Menu = (props) => {
  const { children, items, active,from } = props;
  const [isOpened, setIsOpened] = useState(true);
  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();
  return (
    <div className="border-b border-slate-800 mt-2">
      <button
        className={`w-full flex items-center justify-between text-white p-2 rounded-lg hover:bg-red-500 hover:text-white duration-150 
        ${pathname.startsWith(active) && "bg-red-500" }
        `}
        
      >
        <div onClick={()=>{
          if(from=='faq'){
            navigate('/faq/allFaqs')
          }else{
            navigate('/admins/allAgents')
          }
        }} className={`flex items-center gap-x-2`}>{children}</div>
        <IoIosArrowDown
        onClick={() => setIsOpened(!isOpened)}
          className={`text-xl text-red-700 duration-150 ${
            isOpened ? "rotate-180 text-white" : ""
          }`}
        />
      </button>
      {isOpened ? (
        <div className="mx-4 px-2 border-l text-sm font-medium">
          {items.map((item, idx) => (
            <div key={idx} className="border-b border-slate-800">
              <div
                onClick={() => navigate(`${item?.href}`)}
                className={`flex items-center gap-x-2  p-2 rounded-lg  hover:bg-red-500 duration-150
                 ${pathname === item?.href ? "text-red-500":"text-white"}`}
              >
                {item.icon ? (
                  <div className="text-gray-500">{item.icon}</div>
                ) : (
                  ""
                )}
                {item.name}
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const AdminMobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useLocation();
  const { pathname } = router;
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navigation = [
    {
      href: "/adminHomePage",
      name: "হোম পেইজ",
      icon: "",
    },
  ];

  const navsFooter = [
    {
      href: "/adminHomePage",
      name: "1TEN",
      icon: "",
    },
    {
      href: "",
      name: "1TEN কমিউনিটি",
      icon: "",
    },
    {
      href: "",
      name: "1TEN ফোরাম",
      icon: "",
    },
  ];

  const generalQsns = [
    { name: "1Ten প্রক্সী লিঙ্ক", href: "/faq/proxyLink", icon: "" },
    { name: "1Ten তে একাউন্ট খুলবেন?", href: "/faq/openAccount", icon: "" },
    { name: "এজেন্ট এর নতুন নাম্বার", href: "/faq/oldNewNumber", icon: "" },
    { name: "ফোন নাম্বার সার্চ করুন", href: "/faq/searchByNumber", icon: "" },
  ];

  const agentListMenus = [
    { name: "এজেন্ট কে ভেরিফাই করুনট", href: "/admins/verifyAdmin" },
    { name: "এজেন্ট লিষ্ট", href: "/admins/agent" },
    { name: "সুপার এজেন্ট লিষ্ট", href: "/admins/superAgent" },
   
    { name: "সাব এডমিন লিষ্ট", href: "/admins/subAdmin" },
    { name: "এডমিন লিষ্ট", href: "/admins/admin" },
    { name: "সাইট এডমিন লিষ্ট", href: "/admins/siteAdmin" },
    { name: "কাস্টোমার সার্ভিস লিষ্ট", href: "/admins/customerService" },
  ];

  return (
    <div className="">
      <div className="h-[50px] w-full flex items-center justify-between px-5 shadow-md border-b-2 border-red-500">
        <div className="flex gap-x-2 ">
          <button
            onClick={toggleDrawer}
            className="text-2xl border-r pr-2 text-slate-600"
          >
            <GiHamburgerMenu />
          </button>
          <img
            onClick={() => navigate("/")}
            width={70}
            height={70}
            src={images.logo}
            alt=""
          />
        </div>

        <Link
          to="/admins/customerService"
          className="text-xs  text-red-600  hover:text-700"
        >
          কাস্টোমার সার্ভিস
        </Link>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className=""
      >
        <nav className="fixed top-0 left-0 w-full h-full  border-r bg-black space-y-8 sm:w-80">
          <div className="flex flex-col h-[100vh] overflow-y-auto p-4">
            <div className="flex justify-between items-center text-white border-b border-slate-800">
              <p className="font-semibold text-lg">Sidebar</p>

              <button
                onClick={toggleDrawer}
                className="border-l text-lg font-bold p-2 border-slate-800 hover:text-red-700"
              >
                <IoClose />
              </button>
            </div>

            <div className="mt-5 overflow-auto">
              <div className="text-sm font-medium flex-1">
                {navigation.map((item, idx) => (
                  <div key={idx} className="border-b border-slate-800">
                    <Link
                      to={item.href}
                      className={`flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-red-500 hover:text-white duration-150 ${
                        pathname === item.href && "bg-red-500"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
                <li className="list-none">
                  <Menu from ='faq' items={generalQsns} active={"/faq"}>সাধারণ প্রশ্ন উত্তর</Menu>
                </li>
                <li className="list-none">
                  <Menu from='admins' items={agentListMenus} active={"/admins"}>এজেন্ট লিস্ট</Menu>
                </li>
              </div>

              <div>
                <div className="text-sm font-medium">
                  {navsFooter.map((item, idx) => (
                    <div key={idx} className="border-b border-slate-800 ">
                      <Link
                        to={item.href}
                        className={`flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-red-500 duration-150 cursor-not-allowed ${
                          pathname === item.href && "bg-red-500"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </nav>
      </Drawer>
    </div>
  );
};

export default AdminMobileNavbar;
