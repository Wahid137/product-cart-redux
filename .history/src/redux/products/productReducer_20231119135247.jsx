import { ADDPRODUCT } from "./actionTypes";
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
        },
      ];

    default:
      break;
  }
};

export default productReducer;
