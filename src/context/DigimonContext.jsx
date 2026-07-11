import { createContext, useContext, useState } from 'react'
import { useDigimonesData, useEvolucionesData } from '../compoonents/CustomHooks';

export const DigimonContext = createContext();

export const DigimonProvider = ({ children }) => {
        const { products, loader: productsLoading, error } = useDigimonesData();
        const { evolucion, loader: evolutionsLoading } = useEvolucionesData();
        const [selectedDigimon, setSelectedDigimon] = useState(null);
        const [selectedDigimon2, setSelectedDigimon2] = useState(null);
    
        return (
            <DigimonContext.Provider value = { { products, productsLoading, error, selectedDigimon, setSelectedDigimon, selectedDigimon2, setSelectedDigimon2, evolucion, evolutionsLoading } }>
                { children }
            </DigimonContext.Provider>
        )
}

export const useDigimon = () => useContext(DigimonContext)