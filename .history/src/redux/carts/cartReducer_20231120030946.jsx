import {
  ADDTOCART,
  DECREASEQUANTITY,
  INCREASEQUANTITY,
  REMOVECART,
} from "./actionTypes";
import { initialState } from "./initialState";

const nextId = (carts) => {
  const maxId = carts.reduce((maxId, cart) => Math.max(maxId, cart.id), -1);
  return maxId + 1;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      return [
        ...state,
        {
          id: nextId(state),
          ...action.payload,
          cartQuantity: action.payload.cartQuantity || 1
          calculatePrice:
            action.payload.cartQuantity * action.payload.cartPrice,
        },
      ];

    case REMOVECART:
      return state.filter((cart) => cart.id !== action.payload);

    case INCREASEQUANTITY:
      return state.map((cart) => {
        if (cart.id === action.payload) {
          return {
            ...cart,
            quantity: cart.quantity - 1,
          };
        }
        return {
          cart,
        };
      });

    case DECREASEQUANTITY:
      return state.map((cart) => {
        if (cart.id !== action.payload) {
          return cart;
        }
        return {
          ...cart,
          quantity: cart.quantity - 1,
        };
      });
    default:
      return state;
  }
};

export default cartReducer;
