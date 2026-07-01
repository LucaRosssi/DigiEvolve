import React, { useState, useEffect, useMemo } from 'react'
import Selector from './Selector'
import { useDigimon } from '../context/DigimonContext'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../sevice/firebase'
import { getEvoluciones } from './CustomHooks'

const SelectorContainer = () => {
  const { products, loader, error, selectedDigimon, setSelectedDigimon, selectedEvolution, setSelectedEvolution, selectedDigimon2, setSelectedDigimon2 } = useDigimon()
  const [filteredEvolutions, setFilteredEvolutions] = useState([])
  const { evolucion } = getEvoluciones();

  useEffect(() => {
    setSelectedEvolution([]);
    setFilteredEvolutions([]);

    if (selectedDigimon?.nombre && evolucion.length > 0) {
      const evoDoc = evolucion.find(d => d.nombre === selectedDigimon.nombre);

      if (evoDoc?.evoluciones && evoDoc.evoluciones.length > 0) {
        setSelectedEvolution(evoDoc.evoluciones); 
      }
    }
  }, [selectedDigimon, evolucion]);

  // filtrar la colección completa para obtener los objetos de las evoluciones
  useEffect(() => {
    if (selectedEvolution.length > 0 && products.length > 0) {
      const evolutionsData = products.filter(d =>
        selectedEvolution.includes(d.nombre)
      );
      setFilteredEvolutions(evolutionsData);
    } else {
      setFilteredEvolutions(null);
    }
  }, [selectedEvolution, products]);

  const clearSelector2 = () => {
    setSelectedDigimon2(null)
  };

  
    const digimonEspeciales = {
        nanimon: 'Nanimon', 
        numemon: 'Numemon',
        sukamon: 'Sukamon',
        vademon: 'Vademon', 
        devimon: 'Devimon', 
    };

    const filteredDigimon = useMemo(() => {
        if (!products || products.length === 0) return [];
        const field = Object.values(digimonEspeciales);

        return products.filter(product => field.includes(product.nombre));
    }, [products]);

    useEffect(()=> {
        console.log(filteredDigimon)
    }, [filteredDigimon]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '60%',
      margin: '20px auto'
    }} className='mobile'>
      {/* Selector 1: lista completa */}
      <Selector
        products={products}
        loader={loader}
        error={error}
        digimon={selectedDigimon}
        setDigimon={setSelectedDigimon}
        type="selector1"
        clear={clearSelector2}
        text={'Digimon Inicial'}
      />

      {/* Selector 2: evoluciones filtradas */}
      <Selector
        products={selectedDigimon ? filteredEvolutions : filteredDigimon}
        loader={loader}
        error={error}
        digimon={selectedDigimon2}
        setDigimon={setSelectedDigimon2}
        type="selector2"
        text={'Digimon Deseado'}
      />
    </div>
  )
}

export default SelectorContainer
