import { ADDTOCART } from "./actionTypes";
import { initialState } from "./initialState";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      break;

    default:
      return state;
  }
};
