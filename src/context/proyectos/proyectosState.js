import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
// import tokenAuth from "../../config/token";

import ProyectosContext from "./proyectosContext";
import ProyectosReducer from "./proyectosReducer";

import {} from "../../types";

const ProyectosState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    cargando: true,
  };

  const [state, dispatch] = useReducer(ProyectosReducer, initialState);

  const registrarProyecto = async (datos) => {
    try {
      const response = await clienteAxios.post("/proyectos", datos);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProyectosContext.Provider
      value={{
        token: state.token,
        usuario: state.usuario,
        registrarProyecto,
      }}
    >
      {props.children}
    </ProyectosContext.Provider>
  );
};

export default ProyectosState;
