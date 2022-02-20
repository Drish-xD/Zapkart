import { LIST_PRODUCTS, RETRIEVE_PRODUCT } from "../actions/types";

const initState = {
  products: {},
  product: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, actions) => {
  switch (actions.type) {
    case LIST_PRODUCTS:
      return { ...state, products: actions.payload };
    case RETRIEVE_PRODUCT:
      return { ...state, product: actions.payload };
    default:
      return state;
  }
};
