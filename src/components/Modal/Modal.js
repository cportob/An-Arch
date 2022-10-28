const Modal = (props) => {
    const {children,setOpen,open}= props;
    return ( 
        <div className={open ? "overlay": ''}>
          <div className="modal" style={!open ? {display: 'none'}:null}>
            <button onClick={() => setOpen(false)}>X</button>
            {children}
            </div>
        </div>
     );
}
 
export default Modal;