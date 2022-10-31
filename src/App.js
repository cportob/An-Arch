import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import { rutas } from "./helpers/Rutas";
import Login from "./Pages/login";
import Register from "./Pages/register";
import MisProyectos from "./Pages/misProyectos";
import MisTrabajos from "./Pages/misTrabajos";
import Perfil from "./Pages/perfil";
import DProyecto from "./Pages/dProyecto";
import Buscar from "./Pages/buscar";
import AuthState from "./context/auth/authState";
import ProyectosState from "./context/proyectos/proyectosState";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: rutas.login, element: <Login /> },
    { path: rutas.register, element: <Register /> },
    { path: rutas.misProyectos, element: <MisProyectos /> },
    { path: rutas.misTrabajos, element: <MisTrabajos /> },
    { path: rutas.perfil, element: <Perfil /> },
    { path: rutas.dProyecto, element: <DProyecto /> },
    { path: rutas.buscar, element: <Buscar /> },
  ]);
  return routes;
};

function App() {
  return (
    <AuthState>
      <ProyectosState>
        <BrowserRouter>
          <AppRoutes></AppRoutes>
        </BrowserRouter>
      </ProyectosState>
    </AuthState>
  );
}

export default App;
