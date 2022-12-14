import Logo from "../../img/Prev.png";
import "../../App.css";
import { Link } from "react-router-dom";
import { rutas } from "../../helpers/Rutas";
import { useState } from "react";

const Main = () => {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });

  const { email, password } = datos;

  const onChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };
  return (
    <main className="main">
      <div className="globalContainer">
        <div className="container boxlogo">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <h1 className="tituloh1">An Arch</h1>
          <h3 className="tiutloP">
            Necesitas un arquitecto o buscas un trabajo?, pues este ese tu
            lugar.
          </h3>
        </div>
        <div className="container">
          <div className="formulario">
            <form action="form1" className="correo">
              <input
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Correo electrónico"
                className="input"
                required
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Contraseña"
                className="input"
                required
              />
              <input
                type="submit"
                value="Iniciar Sesión"
                className="bIniciar"
              />
            </form>
            <div className="oContrasenia">
              <Link href="">¿Olvidaste tu Contraseña?</Link>
            </div>
            <div className="line"></div>
            <div className="enlace">
              <Link role="button" to={rutas.register}>
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
