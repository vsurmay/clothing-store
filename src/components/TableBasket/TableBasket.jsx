import { Image, InputNumber } from "antd";
import React from "react";
import classes from "./TableBasket.module.scss";
import { useDispatch } from "react-redux/es/exports";
import {
  deletProductBasket,
  editProductBasket,
} from "../../redux/actions/basketAction";

const TableBasket = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.wrapper}>
      <div className={`${classes.product} ${classes.item}`}>
        <h4 className={classes.title}>product</h4>
        <ul className={classes.list}>
          {products.map((product) => (
            <li
              className={`${classes.productWrapper} ${classes.listItem}`}
              key={product.id}
            >
              <Image src={product.image} width={80} />
              <div className={classes.productContent}>
                <h3 className={classes.productTitle}>{product.name}</h3>
                <div className={classes.colorWrapper}>
                  <div
                    style={{ background: product.color }}
                    className={classes.colorItem}
                  ></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${classes.price} ${classes.item}`}>
        <h4 className={classes.title}>price</h4>
        <ul className={classes.list}>
          {products.map((product) => (
            <li
              key={product.id}
              className={classes.listItem}
            >{`${product.price.toFixed(2)} EUR`}</li>
          ))}
        </ul>
      </div>
      <div className={`${classes.size} ${classes.item}`}>
        <h4 className={classes.title}>size</h4>
        <ul className={classes.list}>
          {products.map((product) => (
            <li key={product.id} className={classes.listItem}>
              {product.size}
            </li>
          ))}
        </ul>
      </div>
      <div className={`${classes.quantity} ${classes.item}`}>
        <h4 className={classes.title}>quantity</h4>
        <ul className={classes.list}>
          {products.map((product) => (
            <li className={classes.listItem} key={product.id}>
              <InputNumber
                onChange={(e) => {
                  console.log({ ...product, quantity: e });
                  dispatch(
                    editProductBasket({ ...product, quantity: Number(e) })
                  );
                }}
                defaultValue={product.quantity}
                min={1}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={`${classes.total} ${classes.item}`}>
        <h4 className={classes.title}>total</h4>
        <ul className={classes.list}>
          {products.map((product) => (
            <li className={classes.listItem} key={product.id}>
              {(product.quantity * product.price).toFixed(2) + " EUR"}
            </li>
          ))}
        </ul>
      </div>
      <div className={`${classes.action} ${classes.item}`}>
        <ul className={`${classes.list} ${classes.listActives}`}>
          {products.map((product) => (
            <li className={classes.listItem} key={product.id}>
              <button
                onClick={() => {
                  dispatch(deletProductBasket(product));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableBasket;
