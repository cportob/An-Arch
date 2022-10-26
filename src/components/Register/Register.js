import Logo from "../../img/Prev.png";
import "../../App.css";
import { Link } from "react-router-dom";
import { rutas } from "../../helpers/Rutas";

const Register = () =>{
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
            <form action="form" className="form">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="input"
                required
              />
              <input
                type="number"
                name="number"
                placeholder="Telefono celular"
                className="input"
                required
              />
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
              <select className="input" placeholder="Tipo">
                <option value="Contratante">Contratante</option>
                <option value="Arquitecto">Arquitecto</option>
              </select>
              <input
                type="submit"
                value="Registrarse"
                className="bIniciar"
              />
            </form>
            <div className="line"></div>
            <div className="main2">
              <Link role="button" to={rutas.login} >Iniciar sesión</Link>
            </div>
          </div>
          </div>
          </div>
    </main>
        
)
}
export default Register;






































