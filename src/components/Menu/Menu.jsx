import React from "react";
import classes from "./Menu.module.scss";

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
      <div>Search</div>
    </div>
  );
};

export default Menu;
