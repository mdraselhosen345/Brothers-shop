import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import Banner from "../Component/Banner/Banner";
import Card from "../Component/Card/ModernCard";
import Category from "../Component/Category/Category";
import HomeService from "../Component/HomeService/HomeService";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import ElectronicService from "../Component/HomeService/ElectronicService";
import CCTVService from "../Component/HomeService/CCTVService";
import GlassService from "../Component/HomeService/GlassService";
import PlumbingService from "../Component/HomeService/PlumbingService";
import ComputerService from "../Component/HomeService/ComputerService";
import ServicingCenter from "../Component/ServicingCenter/ServicingCenter";
import CardDetails from "../Component/CardDetails/CardDetails";
import ModernCard from "../Component/Card/ModernCard";
import ElectronicCard from "../Component/Card/ElectronicCard";
import ElectronicDetails from "../Component/CardDetails/ElectronicDetails";
import Support from "../Component/Help&Support/Support";
import FAQs from "../Component/Help&Support/FAQs";
import Contact from "../Component/Help&Support/Contact";
import LiveChat from "../Component/Help&Support/LiveChat";
import FeedBack from "../Component/Help&Support/FeedBack";
import Account from "../Component/Help&Support/Account";
import HelpCenter from "../Component/Help&Support/HelpCenter";
import Login from "../Component/Login/Login";
import CreateAccount from "../Component/Login/CreateAccount";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
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
      { path: "CreateAccount", Component: CreateAccount},
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
    ],
  },
]);