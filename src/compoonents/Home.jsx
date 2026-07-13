import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import Body from './BodyContainer'
import Title from './Title'
import { useDigimon } from '../context/DigimonContext'

const Home = () => {
  const { digimonName } = useParams();
  const navigate = useNavigate();
  const { products, productsLoading, selectedDigimon2, setSelectedDigimon2 } = useDigimon();

  // URL -> estado: si alguien entra directo a /agumon (o comparte el link),
  // seleccionar ese Digimon apenas los datos de Firestore terminen de cargar.
  useEffect(() => {
    if (!digimonName || productsLoading || products.length === 0) return;
    if (selectedDigimon2?.nombre === digimonName) return; // ya coincide, no hacer nada

    const found = products.find(
      (d) => d.nombre.toLowerCase() === digimonName.toLowerCase()
    );
    if (found) setSelectedDigimon2(found);
  }, [digimonName, productsLoading, products, selectedDigimon2, setSelectedDigimon2]);

  // estado -> URL: cuando el usuario elige un Digimon distinto en el Selector,
  // reflejarlo en la URL del navegador.
  useEffect(() => {
    if (!selectedDigimon2) {
      if (digimonName) navigate('/', { replace: true });
      return;
    }
    if (selectedDigimon2.nombre !== digimonName) {
      navigate(`/${selectedDigimon2.nombre}`, { replace: true });
    }
  }, [selectedDigimon2, digimonName, navigate]);

  return (
    <>
      <Title/>
      <Body/>
    </>
  )
}

export default Home