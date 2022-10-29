import Update from "../../img/update.png";
import Modal from "../Modal/Modal";
import { useState } from "react";
import iProyecto from "../../img/Fondo.jpg";
import { Link } from "react-router-dom";
import back from "../../img/back.png";
import { rutas } from "../../helpers/Rutas";

const Perfil = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={{ position: "relative" }}>
        <main className="pMain">
          <div className="pMain1">
            <div className="uGlobalContainer">
              <div className="cBack">
                <Link to={rutas.misProyectos} className="back">
                  <img src={back} alt="" />
                </Link>
              </div>
              <div>
                <h1>Mi Proyecto</h1>
              </div>
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
                <div className="bContainer" onClick={() => setOpen(true)}>
                  <img src={Update} alt="" />
                  <label>Editar</label>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Modal open={open} setOpen={setOpen} title={"Actualizar Proyecto"}>
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
      </div>
    </>
  );
};

export default Perfil;
