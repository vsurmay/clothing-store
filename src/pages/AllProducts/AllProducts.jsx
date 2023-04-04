import React from "react";
import classes from "./AllProducts.module.scss";
import {
  Table,
  Image,
  Drawer,
  Button,
  Form,
  Input,
  InputNumber,
  CheckBox,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts } from "../../redux/actions/productsAction";
import { useState } from "react";

const AllProducts = () => {
  const data = useSelector((state) => state.products.data);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    console.log(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (url) => <Image src={url} width={50} />,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Colors",
      dataIndex: "color",
      key: "color",
      render: (colors) =>
        colors.map((el) => (
          <span style={{ background: el }} key={el} className={classes.color}>
            {el}
          </span>
        )),
    },
    {
      title: "Sizes",
      dataIndex: "size",
      key: "size",
      render: (sizes) =>
        sizes.map((el) => (
          <span key={el} className={classes.size}>
            {el.toUpperCase()}
          </span>
        )),
    },
    {
      title: "Active",
      key: "active",
      render: (product) => {
        return (
          <div className={classes.active}>
            <button onClick={showDrawer}>Edit</button>
            <button
              onClick={(e) => {
                dispatch(deleteProducts(product));
              }}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Drawer
        title="Edit product"
        placement="right"
        onClose={onClose}
        open={open}
      >
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default AllProducts;
