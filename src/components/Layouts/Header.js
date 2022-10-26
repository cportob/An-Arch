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
          <div className="userL">
            <img src={User} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
