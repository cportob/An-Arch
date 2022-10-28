import React, { useRef } from "react";
import Logo from "../../img/Prev.png";
import "../../App.css";
import { Link } from "react-router-dom";
import { rutas } from "../../helpers/Rutas";

const URL_LOGIN = "http://localhost/ws-login/login.php";

const enviarData = async (url, data) => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //console.log(resp);
  const json = await resp.json();
  //console.log(json);

  return json;
};

const Main = () => {
  const refUsuario = useRef(null);
  const refClave = useRef(null);
  const handleLogin = async () => {
    const data = {
      usuario: refUsuario.current.value,
      clave: refClave.current.value,
    };
    // console.log(data);
    const respuestaJson = await enviarData(URL_LOGIN, data);
    console.log("Respuesta del evento: ", respuestaJson.conectado);

    
    // eslint-disable-next-line no-undef
    // props.acceder(respuestaJson.conectado);
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
                placeholder="Correo electrónico"
                className="input"
                ref={refUsuario}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="input"
                ref={refClave}
                required
              />
            </form>
            <button className="bIniciar" onClick={handleLogin}>
              Iniciar sesión
            </button>
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
