import React from "react";
import classes from "./AllProducts.module.scss";
import { Table, Image, Drawer } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts } from "../../redux/actions/productsAction";
import { useState } from "react";
import AllProductsForm from "../../forms/AllProductsForm";
import OutLineButton from "../../components/UI/Buttons/OutLineButton";

const AllProducts = () => {
  const data = useSelector((state) => state.products.data);

  const dispatch = useDispatch();

  const [editProduct, setEditProduct] = useState("");

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
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
      render: (colors) => (
        <div className={classes.wrapper}>
          {colors.map((el) => (
            <span
              style={{ background: el }}
              key={el}
              className={classes.color}
            ></span>
          ))}
        </div>
      ),
    },
    {
      title: "Sizes",
      dataIndex: "size",
      key: "size",
      render: (sizes) => (
        <div className={classes.wrapper}>
          {sizes.map((el) => (
            <span key={el} className={classes.size}>
              {el.toUpperCase()}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "Active",
      key: "active",
      render: (product) => {
        return (
          <div className={classes.active}>
            <OutLineButton
              small
              onClick={() => {
                showDrawer();
                setEditProduct(product);
              }}
            >
              <EditOutlined /> Edit
            </OutLineButton>
            <OutLineButton
              small
              delete
              onClick={() => {
                dispatch(deleteProducts(product));
              }}
            >
              <DeleteOutlined /> Delete
            </OutLineButton>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table rowKey={(value) => value.id} columns={columns} dataSource={data} />
      <Drawer
        width={730}
        title="Edit product"
        placement="right"
        onClose={onClose}
        open={open}
        destroyOnClose={true}
      >
        <AllProductsForm editProduct={editProduct} onClose={onClose} />
      </Drawer>
    </>
  );
};

export default AllProducts;
