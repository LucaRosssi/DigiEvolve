import { useEffect, useState } from 'react'
import DigimonInfo from './DigimonInfo'
import { useDigimon } from '../context/DigimonContext';
import '../css/digimonInfo.css'

const DigimonInfoContainer = () => {
  const [ digimon, setDigimon ] = useState(null)
  const { selectedDigimon2, products } = useDigimon();

  useEffect (()=> {
    if (selectedDigimon2 && products.length > 0) {
      const digimonInfo = products.find(
        (d) => d.nombre === selectedDigimon2.nombre
      );
      setDigimon(digimonInfo || null);
    }
  }, [selectedDigimon2, products])
  
  return (
    <>
      {digimon ? (
        <DigimonInfo digimon={digimon} />
      ) : (
        <section className="digimon-field"/>
      )}
    </>
  )
}

export default DigimonInfoContainer