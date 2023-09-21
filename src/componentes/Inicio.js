import React from "react";


function Inicio(){
  return (
    <div>
    <p className="instrucciones" id="instrucciones">
    Ingresa un nombre de usuario para iniciar el juego
    </p>
    <img 
    className="inicio"
    src={require('../img/ppt.png')}
    alt="Piedra Papel Tijera"
    />
    </div>
  );  
}

export default Inicio;