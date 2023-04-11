import React from "react";
import classes from "./Menu.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Menu = ({ menuItems }) => {
  return (
    <div className={classes.wrapper}>
      <nav className={classes.menu}>
        {menuItems.map((el) => (
          <NavLink
            to={el.key}
            className={({ isActive, isPending }) =>
              isPending
                ? `${classes.link}`
                : isActive
                ? `${classes.link} ${classes.active}`
                : `${classes.link}`
            }
            key={el.key}
          >
            {el.text}
          </NavLink>
        ))}
      </nav>
      <button className={classes.search}>
        <SearchOutlined style={{ fontSize: "20px" }} />
        Search
      </button>
    </div>
  );
};

export default Menu;
