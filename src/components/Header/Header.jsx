import React from "react";
import Container from "../Container/Container";
import classes from "./Header.module.scss";
import { Image } from "antd";
import logo from "../../img/logo.svg";
import Menu from "../Menu/Menu";
import { HeartOutlined } from "@ant-design/icons";
import ShopingCardIcon from "../ShopingCardIcon/ShopingCardIcon";
import { Link } from "react-router-dom";
import { mainPaths } from "../../routers/publicRouter";

const Header = () => {
  const menuItems = [
    {
      text: "home",
      key: mainPaths.HOME,
    },
    {
      text: "shop",
      key: mainPaths.SHOP,
    },
    {
      text: "blog",
      key: mainPaths.BLOG,
    },
    {
      text: "sale",
      key: mainPaths.SALE,
    },
    {
      text: "contact us",
      key: mainPaths.CONTACT_US,
    },
  ];

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.wrapper}>
          <Link to={mainPaths.HOME}>
            <Image preview={false} src={logo} />
          </Link>
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
