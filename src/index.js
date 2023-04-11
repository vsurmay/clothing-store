import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/reset.scss";
import "./scss/global.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./routers/mainRouter";
import { adminRouter } from "./routers/adminRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={mainRouter} />
  </Provider>
);
