import React from "react";
import { Carousel } from "antd";
import Container from "../Container/Container";
import LeftArrow from "../../img/arrow-left.svg";
import RightArrow from "../../img/arrow-right.svg";
import "./Slider.scss";
import OutLineButton from "../UI/Buttons/OutLineButton";

const Slider = () => {
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const prevArrow = <img src={LeftArrow} alt={"Arrow left"} />;
  const nextArrow = <img src={RightArrow} alt={"Arrow right"} />;

  return (
    <div className={"slider__section"}>
      <Container>
        <Carousel
          className={"carousel"}
          prevArrow={prevArrow}
          nextArrow={nextArrow}
          arrows={true}
          afterChange={onChange}
        >
          <div className="slider">
            <div className="slider__describtion">
              <h1 className="slider__describtion-title">
                SUMMER SALE GEt{" "}
                <span className="slider__describtion-sale">30% OFF</span> On all
                dress.
              </h1>
              <OutLineButton>Show Now</OutLineButton>
            </div>
            <div className="slider__images"></div>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Container>
    </div>
  );
};

export default Slider;
