import React from "react";
import { useState } from "react";
import PickColor from "../../components/PickColor/PickColor";
import PickSize from "../../components/PickSize/PickSize";
import classes from "./ProductPage.module.scss";

const ProductPage = ({ product }) => {
  const [activeColor, setActiveColor] = useState(product.color[0]);
  const [activeSize, setActiveSize] = useState(null);

  return (
    <div className={classes.productPage}>
      <div className={classes.wrapper}>
        <div className={classes.images}></div>
        <div className={classes.info}>
          <span className={classes.infoBrend}>Fendi</span>
          <h2 className={classes.title}></h2>
          <p className={classes.subtitle}>Select Color</p>
          <PickColor
            setActiveColor={setActiveColor}
            activeColor={activeColor}
            colors={product.color}
          />
          <p className={classes.subtitle}>Select size (Inches)</p>
          <PickSize
            availableSizes={product.size}
            setActiveSize={setActiveSize}
            activeSize={activeSize}
          />
        </div>
      </div>
      <div className={classes.discribtion}></div>
    </div>
  );
};

export default ProductPage;
