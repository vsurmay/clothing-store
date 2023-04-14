import React from "react";
import classes from "./Basket.module.scss";
import { useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import TableBasket from "../../components/TableBasket/TableBasket";

const Basket = () => {
  const basketProduct = useSelector((state) => state.basket.data);
  return (
    <Container>
      <div className={classes.basket}>
        <h2 className={classes.title}>Shoping Cart</h2>
        <div className={classes.wrapper}>
          <TableBasket products={basketProduct} />
          <div className={classes.form}></div>
        </div>
      </div>
    </Container>
  );
};

export default Basket;
