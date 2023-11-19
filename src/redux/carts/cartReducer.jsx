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
    case ADDTOCART: {
      const product = state.find(
        (cartItem) => cartItem.productId === action.payload.id
      );
      if (product) {
        return state.map((p) => {
          if (p.productId === product.productId) {
            return {
              ...p,
              quantity: p.quantity + 1,
            };
          } else {
            return p;
          }
        }); //first time works it
      } else {
        return [
          ...state,
          {
            ...action.payload,
            id: nextId(state),
            quantity: 1,
            productId: action.payload.id,
          },
        ];
      }
    }

    case REMOVECART:
      return state.filter((cart) => cart.id !== action.payload);

    case INCREASEQUANTITY:
      return state.map((cart) => {
        if (cart.id === action.payload) {
          return {
            ...cart,
            quantity: cart.quantity + 1,
          };
        }
        return cart;
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
