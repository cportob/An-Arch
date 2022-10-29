// import { Link } from "react-router-dom";
// import { rutas } from "../../helpers/Rutas";
import User from "../../img/User.png";

const Perfil = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <main className="pMain">
          <div className="pMain1">
            <div className="pGlobalContainer">
              <div>
                <h1>Mi perfil</h1>
              </div>
              <div className="uGeneral">
                <div className="uUser">
                  <div>
                    <img src={User} alt="" />
                  </div>
                  <div>
                    <h2>Usuario</h2>
                  </div>
                </div>
                <div className="uDetalle">
                  <h2>Tipo</h2>
                  <h2>Telefono</h2>
                  <h2>NIT</h2>
                  <h2>Dirección</h2>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Perfil;
