
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AdminNavbar = () => {

  const router= useLocation();
  const navigate=useNavigate()
  

  const generalQsns = [
    { title: "1Ten প্রক্সী লিঙ্ক", url: "/faq/proxyLink" },
    { title: "1Ten তে একাউন্ট খুলবেন?", url: "/faq/openAccount" },
    { title: "এজেন্ট এর নতুন নাম্বার", url: "/faq/oldNewNumber" },
    { title: "ফোন নাম্বার সার্চ করুন", url: "/faq/searchByNumber" },
  ];

  const agentListMenus = [
    { title: "এজেন্ট কে ভেরিফাই করুনট", url: "/admins/verifyAdmin" },
    { title: "এজেন্ট লিষ্ট", url: "/admins/agent" },
    { title: "সুপার এজেন্ট লিষ্ট", url: "/admins/superAgent" },
    // { title: "সাব এজেন্ট লিষ্ট", url: "/Admins/" },
    { title: "সাব এডমিন লিষ্ট", url: "/admins/subAdmin" },
    { title: "এডমিন লিষ্ট", url: "/admins/admin" },
    { title: "সাইট এডমিন লিষ্ট", url: "/admins/siteAdmin" },
    { title: "কাস্টোমার সার্ভিস লিষ্ট", url: "/admins/customerService" },
  ];

  return (
    <div className="border-b-2 bg-white border-slate-200">
      <div className="w-[76%] mx-auto">
        <div className="flex items-center gap-x- w-full h-[50px]">
          <div className="h-[50px] flex items-center">
            <div
           onClick={()=>navigate('/adminHomePage')}
              className={`w-[150px] h-full font-semibold flex justify-center items-center hover:bg-slate-900 hover:text-white border-r cursor-pointer ${
                router.pathname.includes("/adminHomePage")
                  ? "bg-slate-900 text-white"
                  : ""
              }`}
            >
              <Link  to="">হোম পেইজ</Link>
            </div>

            <div className={`dropdown h-full inline-block relative w-[200px] border-r ${router.pathname.includes('/faq') && "bg-slate-900 text-white"}`}>
              <button className={`w-full border-r  font-semibold py-2 px-4 flex justify-center items-end `}>
                <span className="mr-1">সাধারণ প্রশ্ন উত্তর</span>
                <TiArrowSortedDown className="rotate-[-45deg] text-xl -mb-1" />
              </button>
              <div className="dropdown-menu w-[200px] absolute hidden text-gray-700 pt-1 p-2 shadow-lg text-sm bg-gray-200 z-[1000] mt-1">
                {generalQsns.map((item, i) => (
                  <div
                    key={i}
                    onClick={()=>navigate(`${item?.url}`)}
                    className=" text-slate-900  p-1 hover:bg-black hover:text-white cursor-pointer rounded mt-2"
                  >
                    <Link to="">{item?.title}</Link>
                  </div>
                ))}
              </div>
            </div>

            <div  className={`dropdown h-full inline-block relative w-[200px] border-r ${router.pathname.includes('/admins/') && "bg-slate-900 text-white"}`}>
              <button className="w-full border-r  font-semibold py-2 px-4 flex justify-center items-end">
                <span className="mr-1">এজেন্ট লিস্ট</span>
                <TiArrowSortedDown className="rotate-[-45deg] text-xl -mb-1" />
              </button>
              <div className="dropdown-menu w-[200px] absolute hidden text-gray-700 pt-1 p-2 shadow-lg text-sm bg-gray-200 z-[1000]">
                {agentListMenus.map((item, i) => (
                  <div
                    key={i}
                    onClick={()=>navigate(`${item?.url}`)}
                    className=" text-slate-900 hover:text-white rounded p-1 hover:bg-black cursor-pointer mt-2"
                  >
                    <Link to="">{item?.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
