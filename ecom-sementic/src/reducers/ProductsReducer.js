import { LIST_PRODUCTS, RETRIEVE_PRODUCT } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, actions) => {
  switch (actions.type) {
    case LIST_PRODUCTS:
      return actions.payload;
    case RETRIEVE_PRODUCT:
      return actions.payload;
    default:
      return state;
  }
};
