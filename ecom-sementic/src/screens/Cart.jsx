import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { retrieveCart } from "../store/actions";

const Cart = ({ retrieveCart }) => {
  const cart = useSelector(({ Cart }) => Cart.cart);
  console.log(cart);

  useEffect(() => {
    retrieveCart();
  }, [retrieveCart]);

  return <div>cart</div>;
};

export default connect(null, { retrieveCart })(Cart);
