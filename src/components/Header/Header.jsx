import React from "react";
import Container from "../Container/Container";
import classes from "./Header.module.scss";
import { Image } from "antd";
import logo from "../../img/logo.svg";
import Menu from "../Menu/Menu";

const Header = ({ menuItems }) => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.wrapper}>
          <Image preview={false} src={logo} />
          <Menu menuItems={menuItems} />
          <div>Describtion</div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
