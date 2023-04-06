import React from "react";
import classes from "./ShopingCardIcon.module.scss";
import { ShoppingOutlined } from "@ant-design/icons";

const ShopingCardIcon = () => {
  const defaultPrice = 0;

  return (
    <div className={classes.card}>
      <ShoppingOutlined style={{ fontSize: "20px" }} />
      <div className={classes.describtion}>
        <span className={classes.text}>Shopping Cart</span>
        <span className={classes.price}>{defaultPrice.toFixed(2)} EUR</span>
      </div>
    </div>
  );
};

export default ShopingCardIcon;
