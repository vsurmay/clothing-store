import React from "react";
import Container from "../Container/Container";
import classes from "./Header.module.scss";
import { Image } from "antd";
import logo from "../../img/logo.svg";
import Menu from "../Menu/Menu";
import { HeartOutlined } from "@ant-design/icons";
import ShopingCardIcon from "../ShopingCardIcon/ShopingCardIcon";

const Header = ({ menuItems }) => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.wrapper}>
          <Image preview={false} src={logo} />
          <Menu menuItems={menuItems} />
          <div className={classes.describtion}>
            <div className={classes.acount}>
              <a className={classes.link}>SIGN IN</a>
              <a className={classes.link}>CREATE AN ACCOUNT</a>
            </div>
            <HeartOutlined style={{ fontSize: "20px" }} />
            <ShopingCardIcon />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
