import { ADDPRODUCT, ADDQUANTITY, REMOVEQUANTITY } from "./actionTypes";
import { initialState } from "./initialState";

const nextId = (products) => {
  const maxId = products.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
  return maxId + 1;
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return [
        ...state,
        {
          id: nextId(state),
          ...action.payload,
        },
      ];

    case REMOVEQUANTITY:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return 
          product,
      
      });

    case ADDQUANTITY: {
      const { productId, quantity } = action.payload;
      return state.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + quantity,
          };
        }
        return {
          product,
        };
      });
    }

    default:
      return state;
  }
};

export default productReducer;
