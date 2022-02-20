import {
  SET_ERROR,
  LIST_PRODUCTS,
  RETRIEVE_PRODUCT,
  RETRIEVE_CART,
  RETRIEVE_CART_ID,
  REFRESH_CART,
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  DELETE_CART,
  EMPTY_CART,
  GENERATE_TOKEN,
  CAPTURE_ORDER,
  LIST_SHIPPING_COUNTRIES,
  LIST_SHIPPING_SUBDIVISIONS,
} from "./types";
import { commerce } from "../../lib/commerce";

export const listProducts = () => async (dispatch) => {
  const res = await commerce.products.list();
  dispatch({
    type: LIST_PRODUCTS,
    payload: res.data,
  });
};

export const retrieveProduct = (permalink) => async (dispatch) => {
  const res = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });
  dispatch({
    type: RETRIEVE_PRODUCT,
    payload: res,
  });
};

export const retrieveCart = () => async (dispatch) => {
  const res = await commerce.cart.retrieve();
  dispatch({
    type: RETRIEVE_CART,
    payload: res,
  });
};

export const retrieveCartID = () => async (dispatch) => {
  const res = await commerce.cart.id();
  dispatch({
    type: RETRIEVE_CART_ID,
    payload: res,
  });
};

export const refreshCart = () => async (dispatch) => {
  const res = await commerce.cart.refresh();
  dispatch({
    type: REFRESH_CART,
    payload: res,
  });
};

export const addToCart =
  (productId, quantity, variantId, optionId) => async (dispatch) => {
    const res = await commerce.cart.add(productId, quantity, {
      [variantId]: optionId,
    });
    dispatch({
      type: ADD_TO_CART,
      payload: res.cart,
    });
  };

export const updateCart =
  (productId, quantity, variantId, optionId) => async (dispatch) => {
    const res = await commerce.cart.update(productId, {
      quantity: quantity,
      [variantId]: optionId,
    });
    dispatch({
      type: UPDATE_CART,
      payload: res.cart,
    });
  };

export const removeFromCart = (productId) => async (dispatch) => {
  const res = await commerce.cart.remove(productId);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: res.cart,
  });
};

export const deleteCart = () => async (dispatch) => {
  const res = await commerce.cart.delete();
  dispatch({
    type: DELETE_CART,
    payload: res,
  });
};

export const emptyCart = () => async (dispatch) => {
  const res = await commerce.cart.empty();
  dispatch({
    type: EMPTY_CART,
    payload: res.cart,
  });
};

export const generateToken = (cartId) => async (dispatch) => {
  try {
    const res = await commerce.checkout.generateTokenFrom("cart", cartId);
    dispatch({
      type: GENERATE_TOKEN,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      error: error,
    });
  }
};

export const captureOrder =
  (checkoutTokenId, orderData) => async (dispatch) => {
    try {
      const res = await commerce.checkout.capture(checkoutTokenId, orderData);
      dispatch({
        type: CAPTURE_ORDER,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        error: error,
      });
    }
  };

export const listCountries = (checkoutTokenId) => async (dispatch) => {
  const res = await commerce.services.localeListShippingCountries(
    checkoutTokenId
  );
  dispatch({
    type: LIST_SHIPPING_COUNTRIES,
    payload: res.countries,
  });
};

export const listSubdivisions = (checkoutTokenId) => async (dispatch) => {
  const res = await commerce.services.localeListShippingSubdivisions(
    checkoutTokenId,
    "IN"
  );
  dispatch({
    type: LIST_SHIPPING_SUBDIVISIONS,
    payload: res.subdivisions,
  });
};
