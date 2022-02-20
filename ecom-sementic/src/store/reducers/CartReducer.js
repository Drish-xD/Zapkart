import {
  RETRIEVE_CART,
  RETRIEVE_CART_ID,
  REFRESH_CART,
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  DELETE_CART,
  EMPTY_CART,
} from "../actions/types";

const initState = {
  cart: {},
  cartId: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, actions) => {
  switch (actions.type) {
    case RETRIEVE_CART:
      return { ...state, cart: actions.payload };
    case RETRIEVE_CART_ID:
      return { ...state, cartId: actions.payload };
    case REFRESH_CART:
      return { ...state, cart: actions.payload };
    case ADD_TO_CART:
      return { ...state, cart: actions.payload };
    case UPDATE_CART:
      return { ...state, cart: actions.payload };
    case REMOVE_FROM_CART:
      return { ...state, cart: actions.payload };
    case DELETE_CART:
      return { ...state, cart: actions.payload };
    case EMPTY_CART:
      return { ...state, cart: actions.payload };
    default:
      return state;
  }
};
