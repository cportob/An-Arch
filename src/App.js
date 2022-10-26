import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css';
import { rutas } from './helpers/Rutas';
import Login from './Pages/login';
import Register from './Pages/register';

const AppRoutes = () =>{
  let routes = useRoutes([
    {path:rutas.login,element:<Login/>},
    {path:rutas.register,element:<Register/>}
  ])
  return routes;
}
function App() {
  return (
   <BrowserRouter>
   <AppRoutes/>
   </BrowserRouter>
  );
}

export default App;
