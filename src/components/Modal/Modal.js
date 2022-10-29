const Modal = (props) => {
  const { children, setOpen, open } = props;
  return (
    <div className={open ? "overlay" : ""}>
      <div className="modal" style={!open ? { display: "none" } : null}>
        {children}
        <button className="cerrar" onClick={() => setOpen(false)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
