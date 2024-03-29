import CustomerServiceHome from "../components/CustomerServiceHome";
import AdminLayout from "../components/shared/Layout/AdminLayout";



const AdminHomePage = () => {
  return (
    <AdminLayout>
      <CustomerServiceHome />
    </AdminLayout>
  );
};

export default AdminHomePage;
