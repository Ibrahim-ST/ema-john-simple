import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleRemoveFromCart = (id) => {
      const remaining = cart.filter(product=> product.id !==id);
      setCart(remaining);
      removeFromDb(id);
      console.log(id)
    }
    const handleClearCart = () => {
      setCart([]);
      deleteShoppingCart();
    }
  return (
    <div className="shop-container">
      <div className="review-container">
        {
          cart.map(product => <ReviewItem 
            key={product.id}
          product={product}
          handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}
        handleClearCart={handleClearCart}>
          <Link to='/checkout' className="proceed-link">
            <button className="btn-proceed">
              <span>Proceed to Checkout</span>
              <FontAwesomeIcon icon={faCreditCard} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
