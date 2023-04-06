import React from "react";
import classes from "./Menu.module.scss";
import { SearchOutlined } from "@ant-design/icons";

const Menu = ({ menuItems }) => {
  return (
    <div className={classes.wrapper}>
      <nav className={classes.menu}>
        {menuItems.map((el) => (
          <a
            //   потрібно перадавати вклчену сторінку і якщо key буде збігатися додавати кла active
            className={`${classes.link} ${classes.active}`}
            onClick={(e) => {
              e.preventDefault();
            }}
            key={el.key}
          >
            {el.text}
          </a>
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
