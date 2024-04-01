import { FaNotesMedical, FaPlus, FaUsersViewfinder } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { images } from "../../../../config";


 


const DashboardSidebar = () => {
  const route = useLocation();
  const navigate=useNavigate()

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
      <nav className="top-0 left-0 w-full h-screen border-r bg-white">
        <div className="flex flex-col h-full">
          <div className="h-20 flex items-center px-8">
            <div 
            onClick={()=>navigate('/')}
            className="flex-none">
              <img src={images.logo} width={140} className="mx-auto" alt="" />
            </div>
          </div>
          <div className="flex-1 flex flex-col h-full overflow-auto pb-10">
            <div className="px-4 text-sm font-medium flex-1">
              {navigation.map((item, idx) => (
                <div key={idx}>
                  <div
                  onClick={()=>navigate(`${item?.href}`)}                
                    className={`flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 cursor-pointer
                    ${route.pathname === item?.href ? "bg-gray-200" : ""}`}
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div onClick={()=>{
                localStorage.removeItem('token')
                navigate('/login')
              }} className="bg-slate-900 hover:bg-slate-600 mx-5 text-center text-white font-bold cursor-pointer px-3 py-3 rounded-lg">
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
