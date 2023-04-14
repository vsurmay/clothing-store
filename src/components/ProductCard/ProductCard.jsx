import { Image } from "antd";
import React, { useState } from "react";
import PickColor from "../PickColor/PickColor";
import classes from "./ProductCard.module.scss";

const ProductCard = ({ data }) => {
  const [activeColor, setActiveColor] = useState(data.color[0]);

  return (
    <div className={classes.card}>
      <Image preview={false} width={344} src={data.images[activeColor]} />
      <p className={classes.variety}>top women</p>
      <h4 className={classes.name}>{data.name}</h4>
      <h3 className={classes.price}>{data.price.toFixed(2) + " EUR"}</h3>
      <PickColor
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        colors={data.color}
      />
    </div>
  );
};

export default ProductCard;
