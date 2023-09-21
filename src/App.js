import './App.css';
import Titulo from './componentes/Titulo.js';
import Formulario from './componentes/Formulario.js';
import Inicio from './componentes/Inicio';
import Juego from './componentes/Juego';
import React from 'react';
import { useState } from "react";

function App() {
  const [nombreUsuario, setNombreUsuario] = useState(''); 
  
  return (
    <div className="App">
      <Titulo />
      {nombreUsuario === "" ? (
        <>
          <Formulario funcion={setNombreUsuario} nombreUsuario={nombreUsuario} />
          <Inicio />
        </>
      ) : (
        <Juego nombreUsuario={nombreUsuario} />
      )}

    </div>
  );
}

export default App;
