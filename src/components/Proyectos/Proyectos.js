import { useState } from "react";
// import { Link } from "react-router-dom";
// import { rutas } from "../../helpers/Rutas";
import Modal from "../Modal/Modal";

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
                <button onClick={() => setOpen(true)}>Crear proyecto</button>
              </div>
              <div>
                <div className="elementos">
                  {item.map((_, idx) => (
                    <div key={idx} className="elemento">
                      {_}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Modal open={open} setOpen={setOpen}>
          <div className="crearP">
            <h1>Crear Proyecto</h1>
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
                className="cInput"
                type="number"
                name="budget"
                placeholder="Presupuesto"
                required
              />
              <textarea
                className="cInput"
                name="textarea"
                id="descp"
                placeholder="Descripción"
              />
              <input
                className="cInput"
                type="country"
                name="country"
                placeholder="Ciudad"
              />
              <input
                className="cInput"
                type="address"
                name="address"
                placeholder="Dirección"
              />
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
