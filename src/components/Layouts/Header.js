import User from "../../img/User.png";
import Logo from "../../img/Prev.png";
import "../../App.css";

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
                  <a href="">Mis Proyectos</a>
                </li>
                <li>
                  <a href="">Crear proyecto</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="userL" onClick={menu}>
            <img src={User} alt="" />
            <div className="dropdown-content inactive" id="dropDown">
              <p>Perfil</p>
              <div className="line"></div>
              <p>Cerrar sesión</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
