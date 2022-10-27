import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import { rutas } from "./helpers/Rutas";
import Login from "./Pages/login";
import Register from "./Pages/register";
import MisProyectos from "./Pages/misProyectos";
import Actualizar from "./Pages/actualizar";
import Crear from "./Pages/Crear";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: rutas.login, element: <Login /> },
    { path: rutas.register, element: <Register /> },
    { path: rutas.misProyectos, element: <MisProyectos /> },
    { path: rutas.actualizar, element: <Actualizar /> },
    { path: rutas.Crear, element: <Crear></Crear> },
  ]);
  return routes;
};
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
