import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <>
      <h2>Product coming here : {products.length} product</h2>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
        <div className="cart-container">
          <h4>order summary</h4>
        </div>
      </div>
    </>
  );
};

export default Shop;
