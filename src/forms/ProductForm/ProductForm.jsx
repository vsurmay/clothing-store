import React, { useEffect, useState } from "react";
import classes from "./ProductForm.module.scss";
import { Checkbox, Form, Input, InputNumber } from "antd";
import { useDispatch } from "react-redux";
import { adedProducts, editProducts } from "../../redux/actions/productsAction";
import { sizeOptions, colorOptions } from "./productFormData";
import FillButton from "../../components/UI/Buttons/FillButton";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ add, editProduct }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectColors, setSelectColors] = useState([]);

  useEffect(() => {
    if (editProduct) {
      setSelectColors(editProduct.color);
    }
  }, []);

  const onFinish = (values) => {
    if (add) {
      dispatch(adedProducts(values));
    } else {
      dispatch(editProducts(values, editProduct.id));
      navigate("/admin/all_products");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="vertical"
      className={`${add ? classes.formAdd : classes.formEdit}`}
      name={add ? "Add product" : "Edit Product"}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={!add ? editProduct : null}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Product Code"
        name="productCode"
        rules={[
          {
            required: true,
            message: "Please input product code!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Size"
        name="size"
        rules={[
          {
            required: true,
            message: "Please input size!",
          },
        ]}
      >
        <Checkbox.Group className={classes.group}>
          {sizeOptions.map((el) => (
            <div key={el.key} className={classes.checkbox}>
              <span> {el.label.toUpperCase()}</span>
              <Checkbox value={el.key}></Checkbox>
            </div>
          ))}
        </Checkbox.Group>
      </Form.Item>

      <Form.Item
        label="Color"
        name="color"
        rules={[
          {
            required: true,
            message: "Please input size!",
          },
        ]}
      >
        <Checkbox.Group
          onChange={(e) => {
            setSelectColors(e);
          }}
          className={classes.group}
        >
          {colorOptions.map((el) => (
            <div
              style={{ background: el.key, padding: "5px" }}
              key={el.key}
              className={classes.checkbox}
            >
              <span> {el.label}</span>
              <Checkbox value={el.key}></Checkbox>
            </div>
          ))}
        </Checkbox.Group>
      </Form.Item>

      {selectColors
        ? selectColors.map((color) => (
            <Form.Item
              className={classes.test}
              key={color}
              name={["images", color]}
              label={
                <div
                  style={{
                    background: color,
                    width: "20px",
                    height: "20px",
                    borderRadius: "5px",
                  }}
                ></div>
              }
            >
              <Input addonBefore={"Url"} />
            </Form.Item>
          ))
        : null}

      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            required: true,
            message: "Please input price!",
          },
        ]}
      >
        <InputNumber min={0} />
      </Form.Item>

      <Form.Item
        label="Discount"
        name="discount"
        rules={[
          {
            required: true,
            message: "Please input discount!",
          },
        ]}
      >
        <InputNumber addonBefore={"%"} min={0} max={100} />
      </Form.Item>

      {/* <Form.Item
        label="Image"
        name="image"
        rules={[
          {
            required: true,
            message: "Please input image!",
          },
        ]}
      >
        <Input addonBefore={"Url"} />
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <FillButton formButton type="submit">
          {add ? "Add Product" : "Edit Product"}
        </FillButton>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
