import React from "react";
import { Carousel, Image } from "antd";
import Container from "../Container/Container";
import LeftArrow from "../../img/arrow-left.svg";
import RightArrow from "../../img/arrow-right.svg";
import "./Slider.scss";
import OutLineButton from "../UI/Buttons/OutLineButton";
import silderImg1 from "../../img/slider-img1.png";
import silderImg2 from "../../img/slider-img2.png";

const Slider = () => {
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const prevArrow = <img src={LeftArrow} alt={"Arrow left"} />;
  const nextArrow = <img src={RightArrow} alt={"Arrow right"} />;
  const arr = [1, 2, 3, 4];
  return (
    <div className={"slider__section"}>
      <Container>
        <Carousel
          className={"carousel"}
          prevArrow={prevArrow}
          nextArrow={nextArrow}
          arrows={true}
          autoplay
        >
          {arr.map((el) => (
            <div key={el} className="slider">
              <div className="slider__describtion">
                <h1 className="slider__describtion-title">
                  SUMMER SALE GEt{" "}
                  <span className="slider__describtion-sale">30% OFF</span> On
                  all dress.
                </h1>
                <OutLineButton>Show Now</OutLineButton>
              </div>
              <div className="slider__images">
                <Image preview={false} alt="Banner picture" src={silderImg1} />
                <Image preview={false} alt="Banner picture" src={silderImg2} />
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Slider;
