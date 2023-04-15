import { Image } from "antd";
import React, { useState } from "react";
import PickColor from "../PickColor/PickColor";
import classes from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const [activeColor, setActiveColor] = useState(data.color[0]);

  return (
    <Link to={`product/${data.id}`}>
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
    </Link>
  );
};

export default ProductCard;
