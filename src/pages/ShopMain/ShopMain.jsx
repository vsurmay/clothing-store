import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";

const ShopMain = () => {
  const products = useSelector((state) => state.products.data);
  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopMain;
