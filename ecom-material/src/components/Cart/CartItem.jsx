import React from "react";

const CartItem = ({ item }) => {
  return (
    <>
      <div>{item.name}</div>
      <div>{item.quantity}</div>
      <div>{item.price.formatted_with_symbol}</div>
    </>
  );
};

export default CartItem;
