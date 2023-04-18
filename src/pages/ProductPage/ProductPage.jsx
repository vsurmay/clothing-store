import React from "react";
import { useState } from "react";
import PickColor from "../../components/PickColor/PickColor";
import PickSize from "../../components/PickSize/PickSize";
import classes from "./ProductPage.module.scss";
import FillButton from "../../components/UI/Buttons/FillButton";
import OutLineButton from "../../components/UI/Buttons/OutLineButton";
import { HeartOutlined } from "@ant-design/icons";
import { InputNumber, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { adedProductBasket } from "../../redux/actions/basketAction";
import { useParams } from "react-router-dom";
import { message } from "antd";

const ProductPage = () => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loader.loader);

  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.data.find((product) => product.id === Number(productId))
  );

  console.log(product);

  const allProductsBasketUniqueCodes = useSelector((state) =>
    state.basket.data.map((product) => product.uniqueCode)
  );

  const [activeColor, setActiveColor] = useState(
    product !== undefined && !loader ? product.color[0] : null
  );
  const [activeSize, setActiveSize] = useState(
    product !== undefined && !loader ? product.size[0] : null
  );

  const [quantityProduct, setQuantityProduct] = useState(1);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "The product has been added to the cart",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Sorry but the product is basket",
    });
  };

  const onSubmit = () => {
    const newUniqueCode = product.name + activeColor + activeSize;
    console.log(newUniqueCode);
    if (allProductsBasketUniqueCodes.includes(newUniqueCode)) {
      error();
    } else {
      const basketItem = {
        name: product.name,
        price: newPrice(product.price, product.discount),
        color: activeColor,
        size: activeSize,
        quantity: quantityProduct,
        image: product.images[activeColor],
        productCode: product.productCode,
        uniqueCode: newUniqueCode,
      };
      dispatch(adedProductBasket(basketItem));
      success();
    }
  };

  const newPrice = (price, percent) => {
    const result = percent === 0 ? price : price - (price * percent) / 100;
    return result;
  };

  return (
    <>
      {contextHolder}
      {loader || product === undefined ? null : (
        <div className={classes.productPage}>
          <div className={classes.wrapper}>
            <div className={classes.images}>
              <Image width={624} src={product.images[activeColor]} />
            </div>
            <div className={classes.info}>
              <span className={classes.infoBrend}>Fendi</span>
              <h2 className={classes.title}>{product.name}</h2>
              <p className={classes.subtitle}>Select Color</p>
              <PickColor
                setActiveColor={setActiveColor}
                activeColor={activeColor}
                colors={product.color}
              />
              <p className={classes.subtitle}>
                Select size (Inches)<span>Size guide</span>
              </p>
              <PickSize
                availableSizes={product.size}
                setActiveSize={setActiveSize}
                activeSize={activeSize}
              />
              <div className={classes.priceWrapper}>
                <div className={classes.quantity}>
                  <p className={classes.subtitle}>quantity</p>
                  <InputNumber
                    onChange={(value) => {
                      setQuantityProduct(value);
                    }}
                    defaultValue={quantityProduct}
                    min={1}
                  />
                </div>
                <div className={classes.price}>
                  <p className={classes.subtitle}>Price total</p>
                  {product.discount ? (
                    <p className={`${classes.priceValue} ${classes.newPrice}`}>
                      {(
                        quantityProduct *
                        newPrice(product.price, product.discount)
                      ).toFixed(2)}{" "}
                      EUR{" "}
                      <span className={classes.oldPrice}>
                        {(quantityProduct * product.price).toFixed(2)} EUR
                      </span>
                    </p>
                  ) : (
                    <p className={classes.priceValue}>
                      {(
                        quantityProduct *
                        newPrice(product.price, product.discount)
                      ).toFixed(2)}{" "}
                      EUR
                    </p>
                  )}
                </div>
              </div>
              <div className={classes.btns}>
                <FillButton onClick={onSubmit}>add to bag</FillButton>
                <OutLineButton small={"8px 44px"}>
                  <HeartOutlined /> save
                </OutLineButton>
              </div>
            </div>
          </div>
          <div className={classes.discribtion}></div>
        </div>
      )}
      {/* */}
    </>
  );
};

export default ProductPage;
