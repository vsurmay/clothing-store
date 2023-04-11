import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../pages/AddProduct/AddProduct";
import Admin from "../pages/Admin/Admin";
import AllProducts from "../pages/AllProducts/AllProducts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const adminPath = {
  ADMIN: "/admin",
};

export const adminRouter = createBrowserRouter([
  {
    path: adminPath.ADMIN,
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
]);
