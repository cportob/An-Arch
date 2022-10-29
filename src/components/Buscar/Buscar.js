const Buscar = () => {
  const item = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <>
      <div style={{ position: "relative" }}>
        <main className="pMain">
          <div className="pMain1">
            <div className="pGlobalContainer">
              <div>
                <h1>Proyectos</h1>
              </div>
              <div className="dbus">
                <input
                  type="text"
                  name="buscador"
                  id="buscador"
                  placeholder="Buscar..."
                  className="buscarr"
                />
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
      </div>
    </>
  );
};

export default Buscar;
