import User from "../../img/User.png";
import Update from "../../img/update.png";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Perfil = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={{ position: "relative" }}>
        <main className="pMain">
          <div className="pMain1">
            <div className="uGlobalContainer">
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
                  <p>Arquitecto - Contratante</p>
                  <h2>Telefono</h2>
                  <p>2524365436</p>
                  <h2>NIT</h2>
                  <p>2524365436</p>
                  <h2>Dirección</h2>
                  <p>la casa de joen</p>
                </div>
              </div>
              <div>
                <div className="bContainer" onClick={() => setOpen(true)}>
                  <img src={Update} alt="" />
                  <label>Editar</label>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Modal open={open} setOpen={setOpen} title={"Actualizar"}>
          <form className="datos" action="mActualizar">
            <p>Subir foto de perfil</p>
            <input
              type="file"
              name="file"
              className="fInput"
              placeholder="Foto de perfil"
            />
            <select name="tipoP" className="input">
              <option value="Contratante">Natural</option>
              <option value="Arquitecto">Juridica</option>
            </select>
            <input
              className="input"
              type="phone"
              name="phone"
              placeholder="Número"
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Correo eléctronico"
            />
            <input
              className="input"
              type="country"
              name="country"
              placeholder="Ciudad"
            />
            <input
              className="input"
              type="address"
              name="address"
              placeholder="Dirección"
            />
            <input type="submit" value="Actualizar" className="bActualizar" />
          </form>
        </Modal>
      </div>
    </>
  );
};

export default Perfil;
