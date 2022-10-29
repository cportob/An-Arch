import User from "../../img/User.png";
import flecha from "../../img/flechaAbajo.png";
import Logo from "../../img/Prev.png";
import mail from "../../img/mail.png";
import mail2 from "../../img/mail2.png";
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
        </div>
        <div className="hContainer user">
          <div>
            <nav className="nave">
              <Link to={rutas.misProyectos} className="bandejaE">
                <img src={mail} alt="" />
              </Link>
              <Link to={rutas.misTrabajos} className="bandejaE">
                <img src={mail2} alt="" />
              </Link>
            </nav>
          </div>
          <div className="userL" onClick={menu}>
            <div className="foto">
              <img src={User} alt="" />
              <img className="flecha" src={flecha} alt="" />
            </div>
            <div className="dropdown-content inactive" id="dropDown">
              <Link className="item" to={rutas.perfil}>
                Perfil
              </Link>

              <Link className="item" to={rutas.misProyectos}>
                Mis Proyectos
              </Link>
              <Link className="item" to={rutas.misTrabajos}>
                Mis Trabajos
              </Link>
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
