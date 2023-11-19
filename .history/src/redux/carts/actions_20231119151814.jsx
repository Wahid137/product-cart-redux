import { ADDTOCART } from "./actionTypes";

export const addedCart = (cartItem) => {
  return {
    type: ADDTOCART,
    payload: cartItem,
  };
};
