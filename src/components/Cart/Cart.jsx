import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart , handleClearCart }) => {
  // const cart = props.cart; //first way
  // const {cart} = props; // second way
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if(product.quantity ===0){
    //     product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price *product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = ((totalPrice*7)/100);
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total price : ${totalPrice.toFixed(2)}</p>
      <p>Total Shipping : {totalShipping.toFixed(2)}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h3>Grandtotal: ${grandTotal.toFixed(2)}</h3>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear cart</span> 
        <FontAwesomeIcon   icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default Cart;
