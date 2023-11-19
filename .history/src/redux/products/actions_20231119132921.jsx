import { ADDPRODUCT, ADDQUANTITY, REMOVEQUANTITY } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};

export const removeQuantity = (productId, quantity) => {
  return {
    type: REMOVEQUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
};

export const addQuantity = (quantity) => {
  return {
    type: ADDQUANTITY,
    payload: {
      quantity,
    },
  };
};
