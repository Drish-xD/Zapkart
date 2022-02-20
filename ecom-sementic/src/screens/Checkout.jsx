import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { retrieveCartID, generateToken } from "../store/actions";

const Checkout = ({ generateToken, retrieveCartID }) => {
  const cardId = useSelector(({ Cart }) => Cart.cartId);
  const token = useSelector(({ Checkout }) => Checkout);
  console.log(token);

  useEffect(() => {
    retrieveCartID();
  }, [retrieveCartID]);

  useEffect(() => {
    generateToken(cardId);
  }, [cardId, generateToken]);

  return <div>Checkout</div>;
};

export default connect(null, { generateToken, retrieveCartID })(Checkout);
