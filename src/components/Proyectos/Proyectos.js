import { useState } from "react";
import { Link } from "react-router-dom";
import { rutas } from "../../helpers/Rutas";
import Modal from "../Modal/Modal";

const Proyectos = () => {
  const [open, setOpen] = useState(false);
  const item = [0,1,2,3,4,5,6,7,8,9,10,11];
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
                  {item.map((_,idx) => <div key={idx} className="elemento">{_}</div>)}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Modal open={open} setOpen={setOpen}>

          <form className="datos" action="crear">
            <select name="tipoP" className="aInput">
              <option value="Casa">Casa</option>
              <option value="Apartamnto">Apartamento</option>
              <option value="Negocio">Negocio</option>
            </select>

            <div>
              <label className="textoBox">
                Garage
                <input type="checkbox" name="garage" className="aInput" />
              </label>

              <label className="textoBox">
                Piscina
                <input type="checkbox" name="piscina" className="aInput" />
              </label>

              <label className="textoBox">
                Patio
                <input type="checkbox" name="patio" className="aInput" />
              </label>

              <label className="textoBox">
                Balcón
                <input type="checkbox" name="balcon" className="aInput" />
              </label>
            </div>

            <input
              className="aInput"
              type="number"
              name="budget"
              placeholder="Presupuesto"
              required
            />
            <textarea
              className="aInput"
              name="textarea"
              id="descp"
              placeholder="Descripción"
            />
            <input
              className="aInput"
              type="country"
              name="country"
              placeholder="Ciudad"
            />
            <input
              className="aInput"
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
        </Modal>
      </div>

    </>
  );
};

export default Proyectos;
