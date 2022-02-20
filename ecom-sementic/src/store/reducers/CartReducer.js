import {
  RETRIEVE_CART,
  REFRESH_CART,
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  DELETE_CART,
  EMPTY_CART,
} from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, actions) => {
  switch (actions.type) {
    case RETRIEVE_CART:
      return actions.payload;
    case REFRESH_CART:
      return actions.payload;
    case ADD_TO_CART:
      return actions.payload;
    case UPDATE_CART:
      return actions.payload;
    case REMOVE_FROM_CART:
      return actions.payload;
    case DELETE_CART:
      return actions.payload;
    case EMPTY_CART:
      return actions.payload;
    default:
      return state;
  }
};
