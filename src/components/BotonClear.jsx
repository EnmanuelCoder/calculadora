import "../styles/BotonClear.css"

const BotonClear = (props) => {
  return (
    <button className="Boton-clear" onClick={props.manejarClic}>
      {props.children}        
    </button>
  );
};

export default BotonClear;