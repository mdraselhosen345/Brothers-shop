import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home";
import Banner from "../Component/Banner/Banner";
import Card from "../Component/Card/Card";
import Category from "../Component/Category/Category";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "Banner",
                Component: Banner
            },
            {
                path: "Category",
                Component: Category
            },
            {
                path: "Card",
                Component: Card,
            }
        ]
    },
]);