import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductForm from "../../forms/ProductForm/ProductForm";

const EditProduct = () => {
  const { productId } = useParams();

  const currentProduct = useSelector((state) =>
    state.products.data.find((product) => product.id === Number(productId))
  );

  return (
    <>
      <ProductForm editProduct={currentProduct} />
    </>
  );
};

export default EditProduct;
