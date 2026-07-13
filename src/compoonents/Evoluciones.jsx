import { useMemo } from "react";
import "../css/evoluciones.css"
import { useDigimon } from "../context/DigimonContext";
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const Evoluciones = ({digimon}) => {
  const { setSelectedDigimon2, products, evolucion, setSelectedDigimon } = useDigimon();
  const { t } = useTranslation();


    const lineaEvolutiva = useMemo(() => {
      if (!digimon || !evolucion.length || !products.length) return [];
      const evoDoc = evolucion.find(d => d.nombre === digimon.nombre);
      return evoDoc?.evoluciones ? products.filter(p => evoDoc.evoluciones.includes(p.nombre)) : [];
    }, [digimon, evolucion, products]);

    const preEvoluciones = useMemo(() => {
      if (!digimon || !evolucion.length || !products.length) return [];
      const evoDoc = evolucion.find(d => d.nombre === digimon.nombre);
      return evoDoc?.prevo ? products.filter(p => evoDoc.prevo.includes(p.nombre)) : [];
    }, [digimon, evolucion, products]);

    const cambio  = (evo) => {
      setSelectedDigimon2(evo)
      setSelectedDigimon(null)
    }
    
  return (
    <>
        <h2>{t('evoluciones.title')}</h2>
        <div className="evolve-container">
          <div>
            <h3 style={{textAlign: 'center'}}>Pre-evo</h3>
            <div className="evolve-third-line evolve-column">
              {
                preEvoluciones.map((evo) => (
                  <button className='button' key={evo.id} onClick={() => cambio(evo)}>
                    <img
                      src={evo.icon}
                      alt={evo.nombre}
                      title={evo.nombre}
                      className="evolve"
                    />
                  </button>
                ))
              }
            </div>
          </div>
          <div >
            <h3>Digimon</h3>
            <div className=" evolve-column center">
                  <button className='button' key={digimon.id}>
                    <img
                      src={digimon.icon}
                      alt={digimon.nombre}
                      title={digimon.nombre}
                      className="evolve"
                    />
                  </button>
            </div>
          </div>
          <div>
            <h3>{t('evoluciones.evolutions')}</h3>
            <div className="evolve-third-line evolve-column">
              {
                lineaEvolutiva.map((evo) => (
                  <button className='button' key={evo.id} onClick={() => cambio(evo)}>
                    <img
                      src={evo.icon}
                      alt={evo.nombre}
                      title={evo.nombre}
                      className="evolve"
                    />
                  </button>
                ))
              }
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Evoluciones