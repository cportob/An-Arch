import { PRUEBA } from "../../types";

const reducer = (state, action) => {
  switch (action.type) {
    case PRUEBA:
      return {
        ...state,
        prueba: action,
      };
    default:
      return state;
  }
};

export default reducer;
