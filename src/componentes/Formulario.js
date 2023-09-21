import React from "react";
import { useState } from "react";

function Formulario({funcion, nombreUsuario}){
  const [nombre, setNombre] = useState('');
  function manejarClick () {
    if (nombre === ""){
      alert("Por favor, Ingrese su nombre");
      }
    else {
      funcion(nombre);
    }  
  }
  return (
    <div className="player">
        Ingresa tu nombre:
        <input className="nombre" type="text" name="nombre" placeholder="Nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        />
        
      <button className="startButton" type="submit" onClick={manejarClick}>Iniciar</button>
        
    </div>
  );  
}

export default Formulario;