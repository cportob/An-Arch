const Crear = () => {
  return (
    <main className="cCrear">
      <div className="AGlobalContainer">
        <div className="aContainer2">
          <h2>Crear Proyecto</h2>
        </div>
        <div className="aContainer1">
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
            <input type="submit" value="Guardar y publicar" className="bGuardar" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Crear;
