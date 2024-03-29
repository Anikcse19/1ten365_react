import AdminLogoSection from "../Navbar/AdminLogoSection";
import AdminMobileNavbar from "../Navbar/AdminMobileNavbar";
import AdminsNavInfo from "../Navbar/AdminNavInfo";
import AdminNavbar from "../Navbar/AdminNavbar";


const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="hidden lg:block">
        <AdminsNavInfo/>
        <AdminLogoSection />
        <AdminNavbar />
      </div>

      <div className="block lg:hidden">
        <AdminMobileNavbar />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
