import React from 'react'

const Requisitos = ({digimon}) => {
    const renderBatallas = (batallas) => {
        if (!batallas) return "-";
        if (batallas[0] === 0) return `< ${batallas[1]}`;
        if (batallas[1] === 1000) return `> ${batallas[0]}`;
        return `${batallas[0]} - ${batallas[1]}`;
    };
  return (
    <>  
        <h2>Requisitos</h2>
            <div className="digimon-requisitos">
                <div className='stat'>
                    <img src="https://phoenix-staffel.de/digimon/DigimonWorld/imgs/hp.png" title='Vida' alt="Vida" />
                    <span>
                      { digimon.vida !== null ? (
                        `${digimon.vida}`
                      ) : (
                        '-'
                      )
                      }
                    </span>
                </div>
                <div className='stat'>
                    <img src="https://phoenix-staffel.de/digimon/DigimonWorld/imgs/mp.png" title='MP' alt="MP" />
                    <span>
                      { digimon.mp !== null ? (
                        `${digimon.mp}`
                      ) : (
                        '-'
                      )
                      }
                    </span>
                </div>
                <div className='stat'>
                    <img src="https://phoenix-staffel.de/digimon/DigimonWorld/imgs/offense.png" title='Fuerza' alt="Fuerza" />
                    <span>
                      { digimon.fuerza !== null ? (
                        `${digimon.fuerza}`
                      ) : (
                        '-'
                      )
                      }
                    </span>
                </div>
                <div className='stat'>
                    <img src="https://phoenix-staffel.de/digimon/DigimonWorld/imgs/defense.png" title='Defensa' alt="Defensa" />
                    <span>
                      { digimon.defensa !== null ? (
                        `${digimon.defensa}`
                      ) : (
                        '-'
                      )
                      }
                    </span>
                </div>
                <div className='stat'>
                    <img src="https://phoenix-staffel.de/digimon/DigimonWorld/imgs/speed.png" title='Velocidad' alt="Velocidad" />
                    <span>
                      { digimon.velocidad !== null ? (
                        `${digimon.velocidad}`
                      ) : (
                        '-'
                      )
                      }
                    </span>
                </div>
                <div className='stat'>
                    <img src="https://phoenix-staffel.de/digimon/DigimonWorld/imgs/brains.png" title='Inteligencia' alt="Inteligencia" />
                    <span>
                      { digimon.inteligencia !== null ? (
                        `${digimon.inteligencia}`
                      ) : (
                        '-'
                      )
                      }
                    </span>
                </div>
                <div className='stat'>
                    <img src="https://phoenix-staffel.de/digimon/DigimonWorld/imgs/care.png" title='Erores de Crianza' alt="Erores" />
                    <span>
                      { digimon.errores === null ? (
                          "-"
                        ) : digimon.errores[1] === 100 ? (
                          `> ${digimon.errores[0]}`
                        ) : digimon.errores[0] === 0 ? (
                          `< ${digimon.errores[1]}`
                        ) : (
                          `${digimon.errores[0]} - ${digimon.errores[1]}`
                        )
                      }
                      </span>
                </div>
                <div className='stat'>
                    <img src="https://phoenix-staffel.de/digimon/DigimonWorld/imgs/weight.png" title='Peso' alt="Peso" />
                    <span>
                      { digimon.peso !== null ? (
                        `${digimon.peso[0]} - ${digimon.peso[1]}`
                      ) : (
                        '-'
                      )
                      }
                    </span>
                </div>
            </div>
        <div className="requisitos2">
            <h2>Requisitos Especiales</h2>
            <div className="digimon-requisitos especiales">
                <div className='stat cara'>
                    <img src="https://phoenix-staffel.de/digimon/DigimonWorld/imgs/happiness.png" title='Felicidad' alt="Felicidad" />
                    <span>
                      { digimon.felicidad !== null ? (
                        `${digimon.felicidad}`
                      ) : (
                        '-'
                      )
                      }
                    </span>
                </div>
                <div className='stat cara'>
                    <img src="https://phoenix-staffel.de/digimon/DigimonWorld/imgs/discipline.png" title='Disciplina' alt="Disciplina" />
                    <span>
                      { digimon.disciplina !== null ? (
                        `${digimon.disciplina}`
                      ) : (
                        '-'
                      )
                      }
                    </span>
                </div>
                <div className='stat'>
                    <img src="https://phoenix-staffel.de/digimon/DigimonWorld/imgs/battle.png" title='Batallas' alt="Batallas" />
                    <span>
                      {renderBatallas(digimon.batallas)}
                    </span>
                </div>
                <div className='stat'>
                    <img src="https://phoenix-staffel.de/digimon/DigimonWorld/imgs/techniques.png" title='Técnicas Aprendidas' alt="Técnicas" />
                    <span>
                      { digimon.tecnicas !== null ? (
                        `${digimon.tecnicas}`
                      ) : (
                        '-'
                      )
                      }
                    </span>
                </div>
            </div>
            { digimon.especial && (
              <div className='especial'> 
                <p >{digimon.especial}</p>
              </div>
            )}
        </div>
    </>
  )
}

export default Requisitos