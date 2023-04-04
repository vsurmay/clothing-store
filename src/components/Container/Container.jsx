import React from "react";
import classes from "./Container.module.scss";

const Container = ({ less, children }) => {
  const divClass = less ? classes.containerLess : classes.container;

  return <div className={divClass}>{children}</div>;
};

export default Container;
