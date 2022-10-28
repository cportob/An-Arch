import User from "../../img/User.png";
import Logo from "../../img/Prev.png";
import "../../App.css";

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
<<<<<<< Updated upstream
          <div className="userL">
            <img src={User} alt="" />
=======
          <div>
            <nav className="nave">
              <ul>
                <li>
                  <Link to={rutas.misProyectos}>Mis Proyectos</Link>
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
              <Link className="item" to={rutas.login}>
                Cerrar sesión
              </Link>
            </div>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
