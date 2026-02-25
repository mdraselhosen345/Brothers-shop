// import { createBrowserRouter } from "react-router"

// import Layout from "../Layout/Layout";
// import Home from "../Component/Home/Home";
// import Banner from "../Component/Banner/Banner";
// import Card from "../Component/Card/Card";
// import Category from "../Component/Category/Category";
// import HomeService from "../Component/HomeService/HomeService";
// import ErrorPage from "../Component/ErrorPage/ErrorPage";


// import Computer from "../Component/HomeService/Computer";
// 1

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         Component: Layout,
//         errorElement: <ErrorPage />,
//         children: [
//             {
//                 index: true,
//                 Component: Home,
//             },
//             {
//                 path: "Banner",
//                 Component: Banner
//             },
//             {
//                 path: "Category",
//                 Component: Category
//             },
//             {
//               path:"ErrorPage",
//               Component: ErrorPage
//             },
//             {
//                 path: "Card",
//                 Component: Card,
//             },
//             {
//                 path: "HomeService",
//                 Component: HomeService,
//                 children: [
//                     {
//                         path: "Computer",
//                         Component: Computer
//                     }
//                 ]
//             },


//         ]
//     },
// ]);

import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import Banner from "../Component/Banner/Banner";
import Card from "../Component/Card/Card";
import Category from "../Component/Category/Category";
import HomeService from "../Component/HomeService/HomeService";
import Computer from "../Component/HomeService/Computer";
import ErrorPage from "../Component/ErrorPage/ErrorPage";

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
      {
        path: "HomeService",
        Component: HomeService,
        children: [
          {
            path: "Computer",
            Component: Computer,
          },
        ],
      },
    ],
  },
]);