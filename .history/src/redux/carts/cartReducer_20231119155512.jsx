import { ADDTOCART } from "./actionTypes";
import { initialState } from "./initialState";

const nextId = (carts) => {
  const maxId = carts.reduce((maxId, cart) => Math.max(maxId, cart.id), -1);
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

    default:
      return state;
  }
};

export default cartReducer;
