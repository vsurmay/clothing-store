import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";

const ShopMain = () => {
  const products = useSelector((state) => state.products.data);
  return (
    <div>
      <div>
        <div style={{ display: "flex" }}>
          {products.map((product) => (
            <Link to={`product/${product.id}`} key={product.id}>
              <ProductCard data={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopMain;
