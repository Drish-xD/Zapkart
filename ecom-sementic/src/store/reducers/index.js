import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import CartReducer from "./CartReducer";
import CheckoutReducer from "./CheckoutReducer";

export default combineReducers({
  Products: ProductsReducer,
  Cart: CartReducer,
  Checkout: CheckoutReducer,
});
