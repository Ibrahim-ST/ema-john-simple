import React from "react";
import "./Product.css";

const Product = ({ name, img, seller, price, ratings }) => {
  console.log(name);
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p>${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Ratings : {ratings}stars</p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
