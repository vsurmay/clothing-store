import React from "react";
import classes from "./Admin.module.scss";
import Container from "../../components/Container/Container";
import { useState } from "react";
import AllProducts from "../AllProducts/AllProducts";
import AddProduct from "../AddProduct/AddProduct";

const Admin = () => {
  const [activeMenuKey, setActiveMenuKey] = useState("all_product");

  const menuItems = [
    {
      key: "all_product",
      text: "All products",
    },
    {
      key: "add_product",
      text: "Add product",
    },
  ];

  function menuRender(key) {
    switch (key) {
      case "all_product":
        return <AllProducts />;

      case "add_product":
        return <AddProduct />;

      default:
        return <AllProducts />;
    }
  }

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
                <a
                  className={`${classes.link} ${
                    activeMenuKey === el.key ? classes.active : null
                  }`}
                >
                  {el.text}
                </a>
              </li>
            ))}
          </ul>
          {menuRender(activeMenuKey)}
        </div>
      </Container>
    </div>
  );
};

export default Admin;
