import React, { useMemo } from 'react'
import Selector from './Selector'
import { useDigimon } from '../context/DigimonContext'
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const SelectorContainer = () => {
  const { products, productsLoading, error, selectedDigimon, setSelectedDigimon, selectedDigimon2, setSelectedDigimon2, evolucion } = useDigimon();
  const { t } = useTranslation();

  const selectedEvolution = useMemo(() => {
    if (!selectedDigimon?.nombre || evolucion.length === 0) return [];
    const evoDoc = evolucion.find(d => d.nombre === selectedDigimon.nombre);
    return evoDoc?.evoluciones?.length > 0 ? evoDoc.evoluciones : [];
  }, [selectedDigimon, evolucion]);

  // filtrar la colección completa para obtener los objetos de las evoluciones
  const filteredEvolutions = useMemo(() => {
    if (selectedEvolution.length === 0 || products.length === 0) return [];
    return products.filter(d => selectedEvolution.includes(d.nombre));
  }, [selectedEvolution, products]);
  
  const clearSelector2 = () => {
    setSelectedDigimon2(null)
  };

  
  // Obtener los digimon especiales

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
        loader={productsLoading}
        error={error}
        digimon={selectedDigimon}
        setDigimon={setSelectedDigimon}
        type="selector1"
        clear={clearSelector2}
        text={t('selector.selectorTitle1')}
      />

      {/* Selector 2: evoluciones filtradas */}
      <Selector
        products={selectedDigimon ? filteredEvolutions : filteredDigimon}
        loader={productsLoading}
        error={error}
        digimon={selectedDigimon2}
        setDigimon={setSelectedDigimon2}
        type="selector2"
        text={t('selector.selectorTitle2')}
      />
    </div>
  )
}

export default SelectorContainer
