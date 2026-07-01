import { useEffect, useState } from "react";
import "../css/evoluciones.css"
import { getDigimon, getEvoluciones } from "./CustomHooks";
import { useDigimon } from "../context/DigimonContext";
import SkeletonIcon from "./SkeletonIcon";

const Evoluciones = ({digimon}) => {
  const [ lineaEvolutiva, setLineaEvolutiva ] = useState([]);
  const [ preEvoluciones, setPreEvoluciones ] = useState([])
  const { evolucion, loader } = getEvoluciones();
  const { products } = getDigimon();
  const { setSelectedDigimon2 } = useDigimon();

    useEffect(() => {
      setLineaEvolutiva([]);
      if (digimon && evolucion.length > 0 && products.length > 0) {
        const evoDoc = evolucion.find(d => d.nombre === digimon.nombre);

        if (evoDoc?.evoluciones) {
          // Filtrar los digimon completos que coincidan con los nombres en evoDoc.evoluciones
          console.log(evoDoc.evoluciones)
          const evolutionsData = products.filter(p =>
            evoDoc.evoluciones.includes(p.nombre)
          );
          setLineaEvolutiva(evolutionsData)
        }
      }
    }, [digimon, evolucion, products]);

    useEffect(() => {
      setPreEvoluciones([]);
      if (digimon && evolucion.length > 0 && products.length > 0) {
        const evoDoc = evolucion.find(d => d.nombre === digimon.nombre);

        if (evoDoc?.prevo) {
          // Filtrar los digimon completos que coincidan con los nombres en evoDoc.evoluciones
          console.log(evoDoc.prevo)
          const evolutionsData = products.filter(p =>
            evoDoc.prevo.includes(p.nombre)
          );
          setPreEvoluciones(evolutionsData)
        }
      }
    }, [digimon, evolucion, products]);

    const cambio  = (evo) => {
      setSelectedDigimon2(evo)
      console.log(setSelectedDigimon2)
    }

  return (
    <>
        <h2>Linea Evolutiva</h2>
        <div className="evolve-container">
          <div>
            <h3 style={{textAlign: 'center'}}>Pre-Evoluciones</h3>
            <div className="evolve-third-line evolve-column" 
                  onClick={cambio()}>
              { loader ? (
                Array.from({ length: 6 }, (_, index) => (
                    <SkeletonIcon key={index} />
                ))
              ) : (
                preEvoluciones.map((evo) => (
                  <img
                    key={evo.id}
                    src={evo.icon}
                    alt={evo.nombre}
                    title={evo.nombre}
                    className="evolve"
                    onClick={() => cambio(evo)}
                  />
                ))
              )
              }
            </div>
          </div>
          <div >
            <h3>Digimon</h3>
            <div className=" evolve-column center">
              { loader ? (
                <SkeletonIcon/>
              ) : (
                <img key={digimon.id} src={digimon.icon} alt={digimon.nombre} title={digimon.nombre} className="evolve" onClick={() => cambio(digimon)}/>
              )
              }
              
            </div>
          </div>
          <div>
            <h3>Evoluciones</h3>
            <div className="evolve-third-line evolve-column">
              { loader ? (
                Array.from({ length: 6 }, (_, index) => (
                    <SkeletonIcon key={index} />
                ))
              ) : (
                lineaEvolutiva.map((evo) => (
                  <img
                    key={evo.id}
                    src={evo.icon}
                    alt={evo.nombre}
                    title={evo.nombre}
                    className="evolve"
                    onClick={() => cambio(evo)}
                  />
                ))
              )
              }
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Evoluciones