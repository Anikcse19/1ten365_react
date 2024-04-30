import { createBrowserRouter } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage";
import AdminPage from "../pages/Admins/Admin";
import Agent from "../pages/Admins/Agent";
import AllAgents from "../pages/Admins/AllAgents";
import CustomerServicePage from "../pages/Admins/CustomerService";
import SiteAdminPage from "../pages/Admins/SiteAdmin";
import SubAdminPage from "../pages/Admins/SubAdmin";
import SuperAgent from "../pages/Admins/SuperAgent";
import VerifyAdmin from "../pages/Admins/VerifyAdmin";
import Login from "../pages/Auth/Login";
import AddAdmin from "../pages/Dasboard/AddAdmin";
import CustomService from "../pages/Dasboard/CreateCustomerService";
import FaqConfig from "../pages/Dasboard/FaqConfig";
import ShortcutConfig from "../pages/Dasboard/ShortcutConfig";
import ViewAdmins from "../pages/Dasboard/ViewAdmins";
import EditAdmin from "../pages/Dasboard/editAdmin";
import UserAlertConfig from "../pages/Dasboard/userAlertConfig";
import AllFaq from "../pages/Faq/AllFaq";
import ComplainAgentPage from "../pages/Faq/ComplainAgent";
import ConditionPage from "../pages/Faq/Condition";
import FbGroupLinkPage from "../pages/Faq/FbGroup";
import HowManyAgent from "../pages/Faq/HowManyAgent";
import HowToAgentPage from "../pages/Faq/HowToAgent";
import HowToTransactionPage from "../pages/Faq/HowToTransaction";
import OldNewNumber from "../pages/Faq/OldNewNumber";
import OpenAccount from "../pages/Faq/OpenAccount";
import ProxyLink from "../pages/Faq/ProxyLink";
import SearchByNumber from "../pages/Faq/SearchByNumber";
import WorkOfAgent from "../pages/Faq/WorkOfAgent";
import Home from "../pages/Homepage";
import PrivateRoute from "./privateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/admins",
    children: [
      {
        path: "/admins/customerService",
        element: <CustomerServicePage />,
      },
      {
        path: "/admins/admin",
        element: <AdminPage />,
      },
      {
        path: "/admins/subAdmin",
        element: <SubAdminPage />,
      },
      {
        path: "/admins/superAgent",
        element: <SuperAgent />,
      },
      {
        path: "/admins/agent",
        element: <Agent />,
      },
      {
        path: "/admins/siteAdmin",
        element: <SiteAdminPage />,
      },
      {
        path: "/admins/verifyAdmin",
        element: <VerifyAdmin />,
      },
      {
        path: "/admins/allAgents",
        element: <AllAgents />,
      },
    ],
  },

  {
    path: "/faq",
    children: [
      {
        path: "/faq/howManyAgent",
        element: <HowManyAgent />,
      },
      {
        path: "/faq/workOfAgent",
        element: <WorkOfAgent />,
      },
      {
        path: "/faq/oldNewNumber",
        element: <OldNewNumber />,
      },
      {
        path: "/faq/complainAgent",
        element: <ComplainAgentPage />,
      },
      {
        path: "/faq/condition",
        element: <ConditionPage />,
      },
      {
        path: "/faq/fbGroup",
        element: <FbGroupLinkPage />,
      },
      {
        path: "/faq/howToAgent",
        element: <HowToAgentPage />,
      },
      {
        path: "/faq/howToTransaction",
        element: <HowToTransactionPage />,
      },
      {
        path: "/faq/openAccount",
        element: <OpenAccount />,
      },
      {
        path: "/faq/proxyLink",
        element: <ProxyLink />,
      },
      {
        path: "/faq/searchByNumber",
        element: <SearchByNumber />,
      },
      {
        path: "/faq/allFaqs",
        element: <AllFaq />,
      },
    ],
  },
  {
    path: "/dashboard",
    children: [
      {
        path: "/dashboard/addAdmin",
        element: (
          <PrivateRoute>
            <AddAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/viewAdmins",
        element: (
          <PrivateRoute>
            <ViewAdmins />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/createCustomerService",
        element: (
          <PrivateRoute>
            <CustomService />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/editAdmin/:id",
        element: (
          <PrivateRoute>
            <EditAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/config/shortcut",
        element: (
          <PrivateRoute>
            <ShortcutConfig />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/config/faq",
        element: (
          <PrivateRoute>
            <FaqConfig />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/config/userAlert",
        element: (
          <PrivateRoute>
            <UserAlertConfig />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/adminHomePage",
    element: <AdminHomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
