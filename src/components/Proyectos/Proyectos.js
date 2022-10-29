import { useState } from "react";
// import { Link } from "react-router-dom";
// import { rutas } from "../../helpers/Rutas";
import Modal from "../Modal/Modal";
import add from "../../img/add.png";
import iProyecto from "../../img/Fondo.jpg";
import Update from "../../img/update.png";

const Proyectos = () => {
  const [open, setOpen] = useState(false);
  const [pOpen, setOpenP] = useState(false);
  const [eOpen, setOpenE] = useState(false);
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
                <div className="elementos">
                  {item.map((_, idx) => (
                    <div
                      key={idx}
                      className="elemento"
                      onClick={() => setOpenP(true)}
                    >
                      {_}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Modal open={pOpen} setOpen={setOpenP} title={"Proyecto"}>
          <div className="dProyecto">
            <div className="iProyecto">
              <img src={iProyecto} alt="" />
            </div>
            <div className="iDProyecto">
              <h2>Tipo</h2>
              <p>casa</p>
              <h2>Ciudad</h2>
              <p>La Ciudad de Joen</p>
              <h2>Dirreción</h2>
              <p>La casa de joen</p>
              <h2>Presupuesto</h2>
              <p>20000</p>
              <h2>Descripción</h2>
              <p>Bla bla bla bla</p>
              <h2>Arquitecto a cargo</h2>
              <p>None</p>
            </div>
            <button className="bIniciar">Publicar</button>
            <div className="bContainer" onClick={() => setOpenE(true)}>
              <img src={Update} alt="" />
              <label>Editar</label>
            </div>
          </div>
          <Modal open={eOpen} setOpen={setOpenE} title={"Actualizar Proyecto"}>
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
                <input type="submit" value="Actualizar" className="bGuardar" />
              </form>
            </div>
          </Modal>
        </Modal>
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
