import Logo from "../../img/Prev.png";
import "../../App.css";
import { Link, Navigate } from "react-router-dom";
import { rutas } from "../../helpers/Rutas";
import { useContext, useState } from "react";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const authContext = useContext(AuthContext);
  const { autenticado, registrarUsuario } = authContext;

  const [datos, setDatos] = useState({
    nombre: "",
    phone: "",
    nit: "",
    email: "",
    password: "",
    tipo: "",
  });

  const { nombre, phone, nit, email, password, tipo } = datos;

  const onChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registrarUsuario({ nombre, phone, nit, email, password, tipo });
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
            <form onSubmit={handleSubmit} className="form">
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={onChange}
                placeholder="Nombre"
                className="input"
                required
              />
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={onChange}
                placeholder="Telefono celular"
                className="input"
                required
              />
              <input
                type="text"
                name="nit"
                value={nit}
                onChange={onChange}
                placeholder="NIT"
                className="input"
                required
              />
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
              <select
                className="input"
                onChange={onChange}
                name="tipo"
                value={tipo}
              >
                <option value="Tipo">Tipo/option</option>
                <option value="Contratante">Contratante</option>
                <option value="Arquitecto">Arquitecto</option>
              </select>
              <input type="submit" value="Registrarse" className="bIniciar" />
            </form>
            <div className="line"></div>
            <div className="enlace">
              <Link role="button" to={rutas.misProyectos}>
                Iniciar sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Register;
