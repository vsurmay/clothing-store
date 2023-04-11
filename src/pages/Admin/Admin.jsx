import React from "react";
import classes from "./Admin.module.scss";
import Container from "../../components/Container/Container";
import { useState } from "react";
import AllProducts from "../AllProducts/AllProducts";
import AddProduct from "../AddProduct/AddProduct";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  const [activeMenuKey, setActiveMenuKey] = useState("all_product");

  const menuItems = [
    {
      key: "all_products",
      text: "All products",
    },
    {
      key: "add_product",
      text: "Add product",
    },
  ];

  return (
    <div className={classes.admin}>
      <Container>
        <div className={classes.wrapper}>
          <ul className={classes.menu}>
            {menuItems.map((el) => (
              <li
                onClick={() => {
                  setActiveMenuKey(el.key);
                }}
                key={el.key}
              >
                <NavLink
                  to={el.key}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? `${classes.link}`
                      : isActive
                      ? `${classes.link} ${classes.active}`
                      : `${classes.link}`
                  }
                >
                  {el.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default Admin;
