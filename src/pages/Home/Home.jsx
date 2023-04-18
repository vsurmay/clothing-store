import React from "react";
import Container from "../../components/Container/Container";
import classes from "./Home.module.scss";
import Slider from "../../components/Slider/Slider";
import Brands from "../../components/Brands/Brands";
const Home = () => {
  return (
    <div className={classes.home}>
      <Slider />
      <Brands />
    </div>
  );
};

export default Home;
