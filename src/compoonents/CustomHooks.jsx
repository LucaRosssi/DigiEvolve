import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../sevice/firebase';

export const getDigimon = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader]= useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      let isMounted = true;
      setLoader(true)
      setError(null);
        const prodCollection = collection(db, "digimon") //Indica con que coleccion vamos a trabajar
        getDocs(prodCollection)
        .then((res)=>{
          if (!isMounted) return;
          const list = res.docs.map((doc)=> {
            return {
              id:doc.id, 
              ...doc.data()
            }
          })
          setProducts(list)
        })
        .catch((error)=> {
          if (!isMounted) return;
          console.error(error)
          setError(error)
        })
        .finally(()=> {
          if (!isMounted) return;
          setLoader(false)
        })

        return () => {
          isMounted = false;
        };
    }, []);

    return {products, loader, error};
}

export const getEvoluciones = () => {
    const [evolucion, setEvolucion] = useState([]);
    const [loader, setLoader]= useState(false);
  
    useEffect(() => {
      setLoader(true)
      const fetchEvolutions = async () => {
        try {
          const evolve = collection(db, "digimonEvolve")
          const res = await getDocs(evolve)
          const list = res.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          setEvolucion(list)
        } catch (err) {
          console.error(err)
        }
        finally {
          setLoader(false)
        }
      }
      fetchEvolutions()
    }, []);

    return { evolucion, loader };
}