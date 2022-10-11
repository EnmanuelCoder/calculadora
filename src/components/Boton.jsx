import "../styles/Boton.css"

const Boton = (props) => {

  const esOperador = valor => {
    return isNaN(valor) && (valor != ".") && (valor != "=")
  }

  return (
    <button className={`boton-contenedor ${esOperador(props.children) ? "operador" : "null"}`.trimEnd()}
     onClick={() => props.manejarClic(props.children)}>
      {props.children}        
    </button>
  );
};

export default Boton

// isNaN() Sirve para confirmar si una cadena de 
//caracteres no es un nuemero