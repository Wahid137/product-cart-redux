import { ADDPRODUCT, ADDQUANTITY, REMOVEQUANTITY } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};

export const removeQuantity = (productId) => {
  return {
    type: REMOVEQUANTITY,
    payload: productId,
  };
};

export const addQuantity = (productId, quantity) => {
  return {
    type: ADDQUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
};
