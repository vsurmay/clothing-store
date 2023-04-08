import React from "react";
import classes from "./PickColor.module.scss";

const PickColor = ({ setActiveColor, activeColor, colors }) => {
  return (
    <div className={classes.box}>
      {colors.map((color) => (
        <div
          className={`${classes.wrapperColor} ${
            activeColor === color ? classes.active : null
          }`}
          key={color}
        >
          <button
            onClick={() => {
              setActiveColor(color);
            }}
            className={classes.color}
            style={{ background: color }}
          ></button>
        </div>
      ))}
    </div>
  );
};

export default PickColor;
