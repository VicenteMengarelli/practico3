import React, { useState } from 'react';

function Juego({nombreUsuario}) {
  const [puntosUsuario, setPuntosUsuario] = useState(0);
  const [puntosPC, setPuntosPC] = useState(0);
  const [eleccionUsuario, setEleccionUsuario] = useState(null);
  const [eleccionPC, setEleccionPC] = useState(null);
  const [elegiTuArmaVisible, setElegiTuArmaVisible] = useState(true);
  const [seleccionUsuario, setSeleccionUsuario] = useState(require('../img/ppt.png'));
  const [seleccionPC, setSeleccionPC] = useState(require('../img/ppt2.png'));
  const [mensaje, setMensaje] = useState('-');
  const [festejo, setFestejo] = useState('');
  const puntosParaGanar = 3;
  const [festejoVisible, setFestejoVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);

  //segun la eleccion hecha en cada ronda se mostrara la imagen correspondiente
  const imagenesUsuario = {
    piedra: (require('../img/piedra.png')),
    papel: (require('../img/papel.png')),
    tijera: (require('../img/tijeras.png')),
  };
  const imagenesPc = {
    piedra: (require('../img/piedra2.png')),
    papel: (require('../img/papel2.png')),
    tijera: (require('../img/tijeras2.png')),
  };

  //la funcion se inicia al momento en que el usuario hace click sobre algun arma para jugar
  const iniciarTurno = (e) => {

    const opciones = ['piedra', 'papel', 'tijera'];
    const eleccionPc = opciones[Math.floor(Math.random() * 3)];
    const eleccionUsuario = e.currentTarget.id;

    setEleccionUsuario(eleccionUsuario);
    setEleccionPC(eleccionPc);

  //en caso de que la ronda la gane el usuario se iniciara la siguiente funcion
    const ganaUsuario = () => {
      setPuntosUsuario(puntosUsuario + 1);
      setMensaje('¡Ganaste un punto! 😀');

  //cuando el usuario logre los 3 puntos necesarios para ganar se desactivan los botones para seguir jugando y se muestra el festejo y el boton para reiniciar
      if (puntosUsuario + 1 === puntosParaGanar) {
        setElegiTuArmaVisible(false);
        setFestejoVisible(true);
        setBtnVisible(true);
        setFestejo('🏆 ¡Felicitaciones! ¡Ganaste el juego! 🏆');
      }
    };

    const ganaPc = () => {
      setPuntosPC(puntosPC + 1);
      setMensaje('Gano un punto la PC 😟');
      console.log(puntosPC)
      if (puntosPC +1 === puntosParaGanar) {
        setElegiTuArmaVisible(false);
        setFestejoVisible(true);
        setBtnVisible(true);
        setFestejo('¡La computadora gana!');
      }
    };

    const empate = () => {
      setMensaje('¡Empate!');
    };

  //segun cada eleccion se llama al elemento correspondiente para mostrar por pantalla
    switch (eleccionUsuario) {
      case 'piedra':
        setSeleccionUsuario(imagenesUsuario.piedra);
        break;
      case 'papel':
        setSeleccionUsuario(imagenesUsuario.papel);
        break;
      case 'tijera':
        setSeleccionUsuario(imagenesUsuario.tijera);
        break;
      default:
        break;
    }

    switch (eleccionPc) {
      case 'piedra':
        setSeleccionPC(imagenesPc.piedra);
        break;
      case 'papel':
        setSeleccionPC(imagenesPc.papel);
        break;
      case 'tijera':
        setSeleccionPC(imagenesPc.tijera);
        break;
      default:
        break;
    }

  //segun quien sea el ganador de la ronda se llama a la funcion correspondiente
    if (
      (eleccionUsuario === 'piedra' && eleccionPc === 'tijera') ||
      (eleccionUsuario === 'tijera' && eleccionPc === 'papel') ||
      (eleccionUsuario === 'papel' && eleccionPc === 'piedra')
    ) {
      ganaUsuario();
    } else if (
      (eleccionUsuario === 'tijera' && eleccionPc === 'piedra') ||
      (eleccionUsuario === 'papel' && eleccionPc === 'tijera') ||
      (eleccionUsuario === 'piedra' && eleccionPc === 'papel')
    ) {
      ganaPc();
    } else {
      empate();
    }

  };

//cuando se clickea el boton reiniciar se actualiza lo que se muestra por pantalla  
  const reiniciarJuego = () => {
    setPuntosUsuario(0);
    setPuntosPC(0);
    setEleccionUsuario(null);
    setEleccionPC(null);
    setMensaje('-');
    setSeleccionUsuario(require('../img/ppt.png'));
    setSeleccionPC(require('../img/ppt2.png'));
    setElegiTuArmaVisible(true);
    setFestejoVisible(false);
    setBtnVisible(false);
  };

  return (
    <div>
      <div>
        <p className="instrucciones2">
        El primero que llega a 3 puntos gana el juego
        </p>
      </div>
      <div className="marcador">
        <p className="nombre nombreJugador" id="usuario">{nombreUsuario}</p>
        <p className="nombre nombreComputadora">Computadora</p>
        <p className="puntos">
          <span id="puntosUsuario">{puntosUsuario}</span>
          <span>-</span>
          <span id="puntosComputadora">{puntosPC}</span>
        </p>
      </div>
      <div className="respuesta animacion" id="respuesta">
        <img id="seleccionUsuario" src={seleccionUsuario} alt="" />
        <img id="seleccionPC" src={seleccionPC} alt="" />
      </div>

      <div className="mensaje" id="mensaje">
        <p>
          Usaste <span className="eleccion" >{eleccionUsuario || '-'}</span> Y la computadora
          usó <span className="eleccion" >{eleccionPC || '-'}</span>
        </p>
        <p>{mensaje}</p>
      </div>

      {elegiTuArmaVisible && (
        <div className="elegiTuArma">
          <div className="armas opciones">
            <button className="arma" id="piedra" onClick={iniciarTurno}>
              <img className="opcion" src={require('../img/piedra.png')} alt="Piedra" />
            </button>
            <button className="arma" id="papel" onClick={iniciarTurno}>
              <img className="opcion" src={require('../img/papel.png')} alt="Papel" />
            </button>
            <button className="arma" id="tijera" onClick={iniciarTurno}>
              <img className="opcion" src={require('../img/tijeras.png')} alt="Tijera" />
            </button>
          </div>
          <h2>Elegí para el próximo turno</h2>
        </div>
      )}

      <p className={`festejo ${festejoVisible ? '' : 'disabled'}`} id="festejo">
        {festejo}
      </p>

      <button
        id="reiniciar"
        className={`btn ${btnVisible ? '' : 'disabled'}`}
        onClick={reiniciarJuego}
      >
        Volver a jugar
      </button>

    </div>
  );
}

export default Juego;

