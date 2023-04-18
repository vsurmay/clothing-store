import { Image } from "antd";
import React, { useState } from "react";
import PickColor from "../PickColor/PickColor";
import classes from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const [activeColor, setActiveColor] = useState(data.color[0]);

  console.log(data.discount);
  const newPrice = (price, percent) => {
    const result = !percent ? price : price - (price * percent) / 100;
    console.log(percent);
    return result.toFixed(2) + " EUR";
  };

  console.log(data);
  return (
    <Link to={`product/${data.id}`}>
      <div className={classes.card}>
        <Image preview={false} width={344} src={data.images[activeColor]} />
        <p className={classes.variety}>top women</p>
        <h4 className={classes.name}>{data.name}</h4>
        {data.discount ? (
          <h3 className={`${classes.newPrice} ${classes.price}`}>
            {newPrice(data.price, data.discount)}
            <span className={classes.oldPrice}>{newPrice(data.price)}</span>
          </h3>
        ) : (
          <h3 className={classes.price}> {newPrice(data.price)}</h3>
        )}

        <PickColor
          activeColor={activeColor}
          setActiveColor={setActiveColor}
          colors={data.color}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
