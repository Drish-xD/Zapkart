import {
  SET_ERROR,
  GENERATE_TOKEN,
  CAPTURE_ORDER,
  LIST_SHIPPING_COUNTRIES,
  LIST_SHIPPING_SUBDIVISIONS,
} from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, actions) => {
  switch (actions.type) {
    case GENERATE_TOKEN:
      return actions.payload;
    case CAPTURE_ORDER:
      return actions.payload;
    case LIST_SHIPPING_COUNTRIES:
      return actions.payload;
    case LIST_SHIPPING_SUBDIVISIONS:
      return actions.payload;
    case SET_ERROR:
      return actions.error;
    default:
      return state;
  }
};
