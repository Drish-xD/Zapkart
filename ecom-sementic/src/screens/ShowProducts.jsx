import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { listProducts } from "../store/actions";

const ShowProducts = ({ listProducts }) => {
  const products = useSelector(({ Products }) => Products.products);
  console.log(products);
  
  useEffect(() => {
    listProducts();
  }, []);

  return <div>ShowProducts</div>;
};

export default connect(null, { listProducts })(ShowProducts);
