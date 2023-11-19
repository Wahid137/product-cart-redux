import { ADDTOCART, REMOVECART } from "./actionTypes";
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
          ...action.cartItem,
        },
      ];

    case REMOVECART:
      return state.filter((cart) => cart.id !== action.payload);

    default:
      return state;
  }
};

export default cartReducer;
