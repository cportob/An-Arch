import { useState } from "react";
// import { Link } from "react-router-dom";
// import { rutas } from "../../helpers/Rutas";
import Modal from "../Modal/Modal";
import add from "../../img/add.png";
// import iProyecto from "../../img/Fondo.jpg";
// import Update from "../../img/update.png";
import { Link } from "react-router-dom";
import { rutas } from "../../helpers/Rutas";

const Proyectos = () => {
  const [open, setOpen] = useState(false);

  const item = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <>
      <div style={{ position: "relative" }}>
        <main className="pMain">
          <div className="pMain1">
            <div className="pGlobalContainer">
              <div>
                <h1>Mis proyectos</h1>
                <div className="bContainer" onClick={() => setOpen(true)}>
                  <img src={add} alt="" />
                  <label>Crear proyecto</label>
                </div>
                {/* <button onClick={() => setOpen(true)}className="crea">+ Crear proyecto</button> */}
              </div>
              <div>
                <Link className="elementos" to={rutas.dProyecto}>
                  {item.map((_, idx) => (
                    <div key={idx} className="elemento">
                      {_}
                    </div>
                  ))}
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Modal open={open} setOpen={setOpen} title={"Crear Proyecto"}>
          <div className="crearP">
            <form className="datos" action="crear">
              <select name="tipoP" className="cInput">
                <option value="Casa">Casa</option>
                <option value="Apartamnto">Apartamento</option>
                <option value="Negocio">Negocio</option>
              </select>

              <div className="checkBoxs">
                <label className="textoBox">
                  <input type="checkbox" name="garage" className="aInput" />
                  Garage
                </label>

                <label className="textoBox">
                  <input type="checkbox" name="piscina" className="aInput" />
                  Piscina
                </label>

                <label className="textoBox">
                  <input type="checkbox" name="patio" className="aInput" />
                  Patio
                </label>

                <label className="textoBox">
                  <input type="checkbox" name="balcon" className="aInput" />
                  Balcón
                </label>
              </div>

              <input
                className="input"
                type="number"
                name="budget"
                placeholder="Presupuesto"
                required
              />
              <textarea
                className="input"
                name="textarea"
                id="descp"
                placeholder="Descripción"
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
              <p>Subir foto de Proyecto</p>
              <input type="file" name="file" className="fInput" />
              <input type="submit" value="Guardar" className="bGuardar" />
              <input
                type="submit"
                value="Guardar y publicar"
                className="bGuardar"
              />
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Proyectos;
