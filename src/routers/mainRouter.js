import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ContactUs from "../pages/ContactUs/ContactUs";
import Blog from "../pages/Blog/Blog";
import Sale from "../pages/Sale/Sale";
import Admin from "../pages/Admin/Admin";
import AddProduct from "../pages/AddProduct/AddProduct";
import AllProducts from "../pages/AllProducts/AllProducts";

export const mainPaths = {
  HOME: "/",
  SHOP: "/shop",
  BLOG: "/blog",
  SALE: "/sale",
  CONTACT_US: "/contact_us",
};

export const mainRouter = createBrowserRouter([
  {
    path: mainPaths.HOME,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: mainPaths.SHOP,
        element: <Shop />,
      },
      {
        path: mainPaths.BLOG,
        element: <Blog />,
      },
      {
        path: mainPaths.SALE,
        element: <Sale />,
      },
      {
        path: mainPaths.CONTACT_US,
        element: <ContactUs />,
      },
      {
        path: "/admin",
        element: <Admin />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "add_product",
            element: <AddProduct />,
          },
          {
            path: "all_products",
            element: <AllProducts />,
          },
        ],
      },
    ],
  },
]);
