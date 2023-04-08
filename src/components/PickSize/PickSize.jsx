import React from "react";
import classes from "./PickSize.module.scss";
import { sizeOptions } from "../../forms/ProductForm/productFormData";

const PickSize = ({ availableSizes, activeSize, setActiveSize }) => {
  console.log(availableSizes.includes("w31"));
  console.log(sizeOptions);
  return (
    <div className={classes.sizeBox}>
      {sizeOptions.map((size) => (
        <div
          onClick={() => {
            setActiveSize(size.key);
          }}
          className={`${classes.sizeWrapper} ${
            availableSizes.includes(size.key) ? classes.availableSize : ""
          } ${activeSize === size.key ? classes.active : ""}`}
          key={size.key}
        >
          <span className={classes.sizeLabel}>{size.label}</span>
        </div>
      ))}
    </div>
  );
};

export default PickSize;
