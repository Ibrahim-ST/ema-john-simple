import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  // const cart = props.cart; //first way
  // const {cart} = props; // second way
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
    console.log(product, totalShipping);
  }
  const tax = ((totalPrice*7)/100);
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total price : ${totalPrice.toFixed(2)}</p>
      <p>Total Shipping : {totalShipping.toFixed(2)}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h3>Grandtotal: ${grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
