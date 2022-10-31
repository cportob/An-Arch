import { REGISTRO_EXITOSO } from "../../types";

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        autenticado: true,
      };
    default:
      return state;
  }
};

export default reducer;
