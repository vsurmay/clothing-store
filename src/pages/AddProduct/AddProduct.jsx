import React from "react";
import classes from "./AddProduct.module.scss";
import { Checkbox, Form, Input, InputNumber } from "antd";
import { useDispatch } from "react-redux";
import { adedProducts } from "../../redux/actions/productsAction";
import { sizeOptions, colorOptions } from "../../forms/productFormData";
import FillButton from "../../components/UI/Buttons/FillButton";

const AddProduct = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(adedProducts(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className={classes.form}
      name="Add product"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
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
        <Checkbox.Group className={classes.group}>
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

      <Form.Item
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
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <FillButton formButton type="submit">
          Add Product
        </FillButton>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
