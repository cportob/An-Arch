import { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import add from "../../img/add.png";
import { Link } from "react-router-dom";
import { rutas } from "../../helpers/Rutas";
import ProyectosContext from "../../context/proyectos/proyectosContext";

const Proyectos = () => {
  const proyectosContext = useContext(ProyectosContext);
  const { registrarProyecto } = proyectosContext;
  const [open, setOpen] = useState(false);
  const [datos, setDatos] = useState({
    tipoP: "",
    garaje: "",
    piscina: "",
    patio: "",
    balcon: "",
    budget: "",
    textarea: "",
    country: "",
    address: "",
    photo: "",
    contratante: "",
  });

  const {
    tipoP,
    garaje,
    piscina,
    patio,
    balcon,
    budget,
    textarea,
    country,
    address,
    photo,
    contratante,
  } = datos;

  const onChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    registrarProyecto({
      tipoP,
      garaje,
      piscina,
      patio,
      balcon,
      budget,
      textarea,
      country,
      address,
      photo,
      contratante,
    });
  };
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
            <form className="datos" onSubmit={handleSubmit}>
              <select
                name="tipoP"
                value={tipoP}
                onChange={onChange}
                className="cInput"
              >
                <option value="Casa">Casa</option>
                <option value="Apartamnto">Apartamento</option>
                <option value="Negocio">Negocio</option>
              </select>
              <div className="checkBoxs">
                <label className="textoBox">
                  <input
                    type="checkbox"
                    name="garage"
                    className="aInput"
                    value={garaje}
                    onChange={onChange}
                  />
                  Garage
                </label>

                <label className="textoBox">
                  <input
                    type="checkbox"
                    name="piscina"
                    className="aInput"
                    value={piscina}
                    onChange={onChange}
                  />
                  Piscina
                </label>

                <label className="textoBox">
                  <input
                    type="checkbox"
                    name="patio"
                    className="aInput"
                    value={patio}
                    onChange={onChange}
                  />
                  Patio
                </label>

                <label className="textoBox">
                  <input
                    type="checkbox"
                    name="balcon"
                    className="aInput"
                    value={balcon}
                    onChange={onChange}
                  />
                  Balc??n
                </label>
              </div>
              <input
                className="input"
                type="text"
                name="budget"
                value={budget}
                placeholder="Presupuesto"
                onChange={onChange}
                required
              />
              <textarea
                className="input"
                name="textarea"
                value={textarea}
                id="descp"
                placeholder="Descripci??n"
                onChange={onChange}
              />
              <input
                className="input"
                type="text"
                name="country"
                value={country}
                placeholder="Ciudad"
                onChange={onChange}
              />
              <input
                className="input"
                type="text"
                name="address"
                value={address}
                placeholder="Direcci??n"
                onChange={onChange}
              />
              <p>Subir foto de Proyecto</p>
              <input
                type="file"
                name="photo"
                value={photo}
                className="fInput"
                onChange={onChange}
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
