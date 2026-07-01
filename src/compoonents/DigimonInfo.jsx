import { useState } from 'react';
import '../css/digimonInfo.css'
import Evoluciones from './Evoluciones';
import Requisitos from './Requisitos';

const DigimonInfo = ({digimon}) => {
  
  const [ view, setView ] = useState(true);


  const changeView = () => {
    setView(!view)
  }

  return (
    <>
      <section className="digimon-field" id="digimonConteiner">
          <div className="digimon-ficha">
              <h1>{digimon.nombre}</h1>
              <img src={digimon.imagen} alt={digimon.nombre} className="digimon-picture" title={digimon.nombre}/>
          </div>
          <div className="evolve-requirements">
              <div className="requisitos-container">
                { view === true ? 
                  <Requisitos digimon={digimon}/>
                  : (
                  <Evoluciones digimon={digimon}/>
                )}
              </div>
              <div className="linea-evolutiva">
                { view === true ? 
                  <button id="openModal" className="evolve-btn" onClick={()=>changeView()}>
                    Ver Línea Evolutiva
                  </button> : (
                  <button id="openModal" className="evolve-btn" onClick={()=>changeView()}>
                    Ver Requisitos
                  </button>
                )}
              </div>
          </div>
      </section>
    </>
  )
}

export default DigimonInfo