import React from "react";
import classes from "./AllProducts.module.scss";
import { Button, Form, Input, InputNumber, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { editProducts } from "../../redux/actions/productsAction";

const AllProductsForm = ({ onClose, editProduct }) => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(editProducts(values, editProduct.id));
    onClose();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const sizeOptions = [
    { label: "osfa", key: "osfa" },
    { label: "w26", key: "w26" },
    { label: "w27", key: "w27" },
    { label: "w28", key: "w28" },
    { label: "w29", key: "w29" },
    { label: "w30", key: "w30" },
    { label: "w31", key: "w31" },
    { label: "w32", key: "w32" },
    { label: "w33", key: "w33" },
    { label: "w34", key: "w34" },
    { label: "w35", key: "w35" },
    { label: "w36", key: "w36" },
    { label: "w38", key: "w38" },
    { label: "w40", key: "w40" },
    { label: "w42", key: "w42" },
    { label: "w44", key: "w44" },
    { label: "w46", key: "w46" },
    { label: "w48", key: "w48" },
    { label: "w50", key: "w50" },
    { label: "w52", key: "w52" },
  ];

  const colorOptions = [
    { label: "color1", key: "#292A2D" },
    { label: "color2", key: "#F3ECE2" },
    { label: "color3", key: "#24426A" },
    { label: "color4", key: "#18574A" },
    { label: "color5", key: "#666689" },
    { label: "color6", key: "#C2BEB6" },
    { label: "color7", key: "#AAABA7" },
    { label: "color8", key: "#971E34" },
    { label: "color9", key: "#CBA13E" },
    { label: "color10", key: "#73513C" },
    { label: "color11", key: "#DAB1B1" },
    { label: "color12", key: "#2B9FA7" },
  ];

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
      initialValues={editProduct}
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AllProductsForm;
