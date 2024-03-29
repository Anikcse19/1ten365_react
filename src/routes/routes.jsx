import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminHomePage from "../pages/AdminHomePage";
import AdminPage from "../pages/Admins/Admin";
import Agent from "../pages/Admins/Agent";
import CustomerServicePage from "../pages/Admins/CustomerService";
import SiteAdminPage from "../pages/Admins/SiteAdmin";
import SubAdminPage from "../pages/Admins/SubAdmin";
import SuperAgent from "../pages/Admins/SuperAgent";
import VerifyAdmin from "../pages/Admins/VerifyAdmin";
import Login from "../pages/Auth/Login";
import AddAdmin from "../pages/Dasboard/AddAdmin";
import CustomService from "../pages/Dasboard/CreateCustomerService";
import ViewAdmins from "../pages/Dasboard/ViewAdmins";
import EditAdmin from "../pages/Dasboard/editAdmin";
import ComplainAgentPage from "../pages/Faq/ComplainAgent";
import ConditionPage from "../pages/Faq/Condition";
import FbGroupLinkPage from "../pages/Faq/FbGroup";
import HowToAgentPage from "../pages/Faq/HowToAgent";
import HowToTransactionPage from "../pages/Faq/HowToTransaction";
import OldNewNumber from "../pages/Faq/OldNewNumber";
import OpenAccount from "../pages/Faq/OpenAccount";
import ProxyLink from "../pages/Faq/ProxyLink";
import SearchByNumber from "../pages/Faq/SearchByNumber";
import Home from "../pages/Homepage";
import PrivateRoute from "./privateRoute";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,   
        element:<Home/>      
      },
      
    ],
  },
  {
    path:'/admins',
    children:[
      {
        path:'/admins/customerService',
        element:<CustomerServicePage/>
      },
      {
        path:'/admins/admin',
        element:<AdminPage/>
      },
      {
        path:'/admins/subAdmin',
        element:<SubAdminPage/>
      },
      {
        path:'/admins/superAgent',
        element:<SuperAgent/>
      },
      {
        path:'/admins/agent',
        element:<Agent/>
      },
      {
        path:'/admins/siteAdmin',
        element:<SiteAdminPage/>
      },
      {
        path:'/admins/verifyAdmin',
        element: <VerifyAdmin/>
      },
     
    ]
  },

  {
    path:'/faq',
    children:[
      {
        path:'/faq/oldNewNumber',
        element:<OldNewNumber/>
      },
      {
        path:'/faq/complainAgent',
        element:<ComplainAgentPage/>
      },
      {
        path:'/faq/condition',
        element:<ConditionPage/>
      },
      {
        path:'faq/fbGroup',
        element:<FbGroupLinkPage/>
      },
      {
        path:'/faq/howToAgent',
        element:<HowToAgentPage/>
      },
      {
        path:'/faq/howToTransaction',
        element:<HowToTransactionPage/>
      },
      {
        path:'/faq/openAccount',
        element:<OpenAccount/>
      },
      {
        path:'/faq/proxyLink',
        element:<ProxyLink/>
      },
      {
        path:'/faq/searchByNumber',
        element:<SearchByNumber/>
      },
    ]
  },
  {
    path:'/dashboard',
    children:[
      {
        path:'/dashboard/addAdmin',
        element:(
          <PrivateRoute>
            <AddAdmin/>
            </PrivateRoute>
        )
      },
      {
        path:'/dashboard/viewAdmins',
        element:(
          <PrivateRoute>
            <ViewAdmins/>
          </PrivateRoute>
        )
      },
      {
        path:'/dashboard/createCustomerService',
        element:(
          <PrivateRoute>
            <CustomService/>
          </PrivateRoute>
        )
      },
      {
        path:'/dashboard/editAdmin/:id',
        element:(
          <PrivateRoute>
            <EditAdmin/>
          </PrivateRoute>
        )
      }
    ]
  },
  {
    path:'/adminHomePage',
    element: <AdminHomePage/>
  },
  {
    path:'/auth/login',
    element:<Login/>
  }
  
 
  
]);

export default routes;
