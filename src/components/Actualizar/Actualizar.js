const Actualizar = () => {
  return (
    <main className="cActualizar">
      <div className="AGlobalContainer">
        <div className="aContainer2">
          <h2>Actualizar datos</h2>
        </div>
        <div className="aContainer1">
          <form className="datos" action="actualizar">
            <p>Subir foto de perfil</p>
            <input
              type="file"
              name="file"
              className="aInput"
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
        </div>
      </div>
    </main>
  );
};

export default Actualizar;
