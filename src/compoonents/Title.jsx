import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDigimon } from '../context/DigimonContext';

const Title = () => {
  const { selectedDigimon2, products } = useDigimon();

  const title = useMemo(() => {
    if (selectedDigimon2 && products.length > 0) {
      const digimon = products.find((d) => d.nombre === selectedDigimon2.nombre);
      if (digimon) return `DigiEvolve — ${digimon.nombre}`;
    }
    return 'DigiEvolve — Calculadora de Evoluciones';
  }, [selectedDigimon2, products]);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default Title