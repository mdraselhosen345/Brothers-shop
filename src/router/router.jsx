
import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import Banner from "../Component/Banner/Banner";
import Card from "../Component/Card/Card";
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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "Banner", Component: Banner },
      { path: "Category", Component: Category },
      { path: "Card", Component: Card },
      {path: "ServicingCenter", Component: ServicingCenter},
      {path: "CardDetails", Component: CardDetails},
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
          }
        ],
      },
    ],
  },
]);