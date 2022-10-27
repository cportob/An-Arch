const Actualizar = () => {
  return (
    <main className="cActualizar">
      <div className="AGlobalContainer">
        <div className="aContainer2">
          <h2>Actualizar datos</h2>
        </div>
        <div className="aContainer1">
          <form className="datos" action="actualizar">
            <select name="tipoP" className="aInput">
              <option value="Contratante">Natural</option>
              <option value="Arquitecto">Juridica</option>
            </select>
            <input
              className="aInput"
              type="phone"
              name="phone"
              placeholder="Número"
            />
            <input
              className="aInput"
              type="email"
              name="email"
              placeholder="Correo eléctronico"
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
            <input type="submit" value="Actualizar" className="bActualizar" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Actualizar;
