import { useLocation } from "react-router-dom";
import DashboardMobileNav from "./DashboardMobileNav";
import DashboardSidebar from "./DashboardSidebar";


const DashboardLayout = ({ children }) => {
  const router = useLocation();


  return (
    <div className="flex lg:flex-row flex-col relative">

      <div className="hidden lg:block lg:w-[21%] bg-green-100 h-full">
        <DashboardSidebar />
      </div>

      <div className="block lg:hidden">
        <DashboardMobileNav />
      </div>

      <div className="p-5 lg:w-[79%] h-full">
        {router.pathname === "/dashboard/viewAdmins" && (
          <div className="w-full">
            <p className="text-lg lg:text-2xl underline font-semibold">Dashboard</p>
          </div>
        )}
        {children}
      </div>

      {/* <div className="h-[200px] w-[400px] bg-red-900 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p>heloooooo</p>
      </div> */}

      
    </div>
  );
};

export default DashboardLayout;
