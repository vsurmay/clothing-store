import React, { useEffect } from "react";
import classes from "./Admin.module.scss";
import Container from "../../components/Container/Container";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { mainPaths } from "../../routers/publicRouter";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productsAction";

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const menuItems = [
    {
      key: mainPaths.ALL_PRODUCTS,
      text: "All products",
    },
    {
      key: mainPaths.ADD_PRODUCT,
      text: "Add product",
    },
  ];

  return (
    <div className={classes.admin}>
      <Container>
        <div className={classes.wrapper}>
          <ul className={classes.menu}>
            {menuItems.map((el) => (
              <li key={el.key}>
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
