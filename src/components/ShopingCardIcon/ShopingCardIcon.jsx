import React from "react";
import classes from "./ShopingCardIcon.module.scss";
import { ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { mainPaths } from "../../routers/publicRouter";
import { useSelector } from "react-redux";
const ShopingCardIcon = () => {
  const basketProducts = useSelector((state) => state.basket.data);

  const sumBasket = basketProducts.reduce(
    (a, b) => a + b.price * b.quantity,
    0
  );

  return (
    <Link to={mainPaths.BASKET}>
      <div className={classes.card}>
        <ShoppingOutlined style={{ fontSize: "20px" }} />
        <div className={classes.describtion}>
          <span className={classes.text}>Shopping Cart</span>
          <span className={classes.price}>{sumBasket.toFixed(2)} EUR</span>
        </div>
      </div>
    </Link>
  );
};

export default ShopingCardIcon;
