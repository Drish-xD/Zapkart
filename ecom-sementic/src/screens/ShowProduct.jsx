import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { retrieveProduct } from "../store/actions";

const ShowProduct = ({ retrieveProduct }) => {
  const product = useSelector(({ Products }) => Products.product);
  console.log(product);
  const { permalink } = useParams();

  useEffect(() => {
    retrieveProduct(permalink);
  }, [permalink, retrieveProduct]);

  return <div>ShowProduct</div>;
};

export default connect(null, { retrieveProduct })(ShowProduct);
