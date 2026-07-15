import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Banner from "../Pages/Home/Banner/Banner";
import Card from "../Pages/Home/Card/ModernCard";
import Category from "../Pages/Home/Category/Category";
import HomeService from "../Pages/Home/HomeService/HomeService";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import ElectronicService from "../Pages/Home/HomeService/ElectronicService";
import CCTVService from "../Pages/Home/HomeService/CCTVService";
import GlassService from "../Pages/Home/HomeService/GlassService";
import ComputerService from "../Pages/Home/HomeService/ComputerService";
import ServicingCenter from "../Pages/Home/ServicingCenter/ServicingCenter";
import CardDetails from "../Pages/Home/CardDetails/CardDetails";
import ModernCard from "../Pages/Home/Card/ModernCard";
import ElectronicCard from "../Pages/Home/Card/ElectronicCard";
import ElectronicDetails from "../Pages/Home/CardDetails/ElectronicDetails";
import Support from "../Pages/Help&Support/Support";
import FAQs from "../Pages/Help&Support/FAQs";
import Contact from "../Pages/Help&Support/Contact";
import LiveChat from "../Pages/Help&Support/LiveChat";
import FeedBack from "../Pages/Help&Support/FeedBack";
import Account from "../Pages/Help&Support/Account";
import HelpCenter from "../Pages/Help&Support/HelpCenter";
import Login from "../Component/Login/Login";
import CreateAccount from "../Component/Login/Register";
import Checkout from "../Component/Checkout/Checkout";
import AdminLayout from "../admin/AdminLayout/AdminLayout";
import Dashboard from "../admin/AdminLayout/Dashboard";
import AddProduct from "../admin/AdminLayout/AddProduct";
import Products from "../admin/AdminLayout/Products";
import Orders from "../admin/AdminLayout/Orders";
import AddModanCard from "../admin/AdminLayout/AddModanCard";
import Computer from "../admin/AdminLayout/Computer";
import Electrical from "../admin/AdminLayout/Electrical";
import CCTV from "../admin/AdminLayout/CCTV";
import GLASS from "../admin/AdminLayout/GLASS";
import Pulmbing from "../admin/AdminLayout/Pulmbing";
import ServiceCenter from "../admin/AdminLayout/ServiceCenter";
import PlumbingService from "../Pages/Home/HomeService/PlumbingService";
import AuthCheck from "../admin/AdminLayout/AuthCheck";
//// new add 
import RootLayout from "../Layouts/RootLayout";
import Register from "../Component/Login/Register";






export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayoutLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "Banner", Component: Banner },
      { path: "Category", Component: Category },
      { path: "ModernCard", Component: ModernCard },
      {path: "ElectronicCard", Component: ElectronicCard},
      {path: "ServicingCenter", Component: ServicingCenter},
      { path: "product/:id", Component: CardDetails },
      { path: "Electronic/:id", Component: ElectronicDetails},

      { path: "Login", Component: Login},
      { path: "Register", Component: Register},

      { path: "Checkout", Component: Checkout},
      // help & Support
      {
  path: "Support", 
  Component: Support,
  children: [
    { path: "Contact", Component: Contact },
    { path: "FAQs", Component: FAQs },
    {path: "LiveChat", Component: LiveChat},
    {path: "Feedback", Component: FeedBack},
    {path: "Account", Component: Account},
    {path: "HelpCenter", Component: HelpCenter}
  ]
},
      //  HomeService
      {
        path: "HomeService",
        Component: HomeService,
        children: [
          {
             path: "ComputerService",
             Component: ComputerService
          },
          {
            path: "ElectronicService",
            Component: ElectronicService
          },
          {
            path: "CCTVService",
            Component: CCTVService
          },
          {
            path: "GlassService",
            Component: GlassService
          },
          {
            path: "PlumbingService",
            Component: PlumbingService
          },
        ],
      },

      // admin penel
    {
      path: "admin",
      Component: AdminLayout,
      children:[
       { path: "dashboard", Component: Dashboard },
       { path: "add-product", Component: AddProduct },
       { path: "add-modancard", Component: AddModanCard},
       { path: "products", Component: Products },
       { path: "orders", Component: Orders },
       { path: "Computer", Component: Computer},
       { path: "Electrical", Component: Electrical},
       { path: "CCTV", Component: CCTV},
       { path: "GLASS", Component: GLASS},
       { path: "pulmbing", Component: Pulmbing},
       { path: "ServiceCenter", Component: ServiceCenter},
       { path: "authcheck", Component: AuthCheck}
      ]
  }
    ],
  },
]);