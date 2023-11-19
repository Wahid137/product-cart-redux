import { ADDTOCART, INCREASEQUANTITY, REMOVECART } from "./actionTypes";

export const addedCart = (cartItem) => {
  return {
    type: ADDTOCART,
    payload: cartItem,
  };
};

export const removeCart = (cartId) => {
  return {
    type: REMOVECART,
    payload: cartId,
  };
};

export const increaseQuantity = (cartId) => {
  return {
    type: INCREASEQUANTITY,
    payload: cartId,
  };
};
