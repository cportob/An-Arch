import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import { rutas } from "./helpers/Rutas";
import Login from "./Pages/login";
import Register from "./Pages/register";
import MisProyectos from "./Pages/misProyectos";
import Actualizar from "./Pages/actualizar";
import Crear from "./Pages/Crear";
import MisTrabajos from "./Pages/misTrabajos";
import Perfil from "./Pages/perfil";
import DProyecto from "./Pages/dProyecto";
// import { useState } from "react";
// import Main from "./components/Login/Main";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: rutas.login, element: <Login /> },
    { path: rutas.register, element: <Register /> },
    { path: rutas.misProyectos, element: <MisProyectos /> },
    { path: rutas.actualizar, element: <Actualizar /> },
    { path: rutas.Crear, element: <Crear /> },
    { path: rutas.misTrabajos, element: <MisTrabajos /> },
    { path: rutas.perfil, element: <Perfil /> },
    { path: rutas.dProyecto, element: <DProyecto /> },
  ]);
  return routes;
};

function App() {
  // const [conectado, setConectado] = useState = (false);
  // const acceder = (estado) => {
  //   setConectado(estado);
  // };
  return (
    //   conectado ? (
    //   <MisProyectos></MisProyectos>
    // ) : (
    //   <Main acceder={acceder}></Main>
    // )
    <BrowserRouter>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  );
}

export default App;
