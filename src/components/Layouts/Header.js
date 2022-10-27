import User from "../../img/User.png";
import Logo from "../../img/Prev.png";
import "../../App.css";
import { Link } from "react-router-dom";
import { rutas } from "../../helpers/Rutas";

function menu() {
  document.getElementById("dropDown").classList.toggle("inactive");
}

const Header = () => {
  return (
    <header>
      <div className="hGlobalContainer">
        <div className="hContainer logo">
          <div className="logoL">
            <img src={Logo} alt="" />
          </div>
          <div>
            <h3>An Arch</h3>
          </div>
          <div></div>
        </div>
        <div className="hContainer user">
          <div>
            <nav className="nave">
              <ul>
                <li>
                  <Link to={rutas.misProyectos}>Mis Proyectos</Link>
                </li>
                <li>
                  <Link to={rutas.Crear}>Crear proyecto</Link>
                </li>
                <li>
                  <Link to={rutas.misProyectos}>Notificaciones</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="userL" onClick={menu}>
            <img src={User} alt="" />
            <div className="dropdown-content inactive" id="dropDown">
              <Link className="item" to={rutas.actualizar}>
                Actualizar perfil
              </Link>
              <div className="line"></div>
              <Link className="item" to={rutas.login}>
                Cerrar sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
