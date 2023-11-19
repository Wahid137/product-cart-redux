import { ADDPRODUCT } from "./actionTypes";
import { initialState } from "./initialState";

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return [
        ...state,
        {
          id: nextId(state),
        },
      ];

    default:
      break;
  }
};

export default productReducer;
