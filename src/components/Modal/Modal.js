const Modal = (props) => {
  const { title, children, setOpen, open } = props;
  return (
    <div className={open ? "overlay" : ""}>
      <div className="modal" style={!open ? { display: "none" } : null}>
        <div className="headerModal">
          <h1>{title}</h1>
          <button className="cerrar" onClick={() => setOpen(false)}>
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
