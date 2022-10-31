import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
// import tokenAuth from "../../config/token";
import { REGISTRO_EXITOSO } from "../../types";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    cargando: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registrarUsuario = async (datos) => {
    try {
      const response = await clienteAxios.post("/user", datos);
      if (response.status === 200) {
        dispatch({ type: REGISTRO_EXITOSO, payload: response.data });
      }

      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        usuario: state.usuario,
        autenticado: state.autenticado,
        registrarUsuario,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
