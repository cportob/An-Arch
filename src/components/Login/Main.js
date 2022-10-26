import Logo from "../../img/Prev.png";
import "../../App.css";
import { Link } from "react-router-dom";
import { rutas } from "../../helpers/Rutas";

const Main = () => {
  return (
    <main className="main">
      <div className="globalContainer">
        <div className="container boxlogo" >
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <h1 className="tituloh1">An Arch</h1>
          <h3 className="tiutloP">Te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</h3>
        </div>
        <div className="container">
          <div className="formulario">
            <form action="form" className="correo">
              <input
                type="text"
                name="email"
                placeholder="Correo electrónico"
                className="input"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="input"
                required
              />
              <input
                type="submit"
                value="Iniciar sesión"
                className="bIniciar"
              />
            </form>
            <div className="oContrasenia">
              <a href="">¿Olvidaste tu Contraseña?</a>
            </div>
            <div className="line"></div>
            <div className="enlace">
              <Link role="button" to={rutas.register} >Registrarse</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
 
export default Main;