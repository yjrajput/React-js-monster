import React from "react";

const Cart = ({ CartItems }) => {
  return (
    <div>
      <h1>Cart 🏧</h1>
      <h1>you have {CartItems.length} in your cart</h1>

      {CartItems.length !== 0 ? (
        CartItems.map((items) => (
          <div>
            <li>{items}</li>
          </div>
        ))
      ) : (
        <h1>You dont have any item in your cart</h1>
      )}
    </div>
  );
};

export default Cart;
