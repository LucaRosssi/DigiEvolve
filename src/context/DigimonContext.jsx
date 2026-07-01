import { collection, getDocs } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react'
import { db } from '../sevice/firebase';
import { getDigimon } from '../compoonents/CustomHooks';

export const DigimonContext = createContext();

export const DigimonProvider = ({ children }) => {
        const { products, loader, error } = getDigimon();
        const [selectedDigimon, setSelectedDigimon] = useState(null);
        const [selectedDigimon2, setSelectedDigimon2] = useState(null);
        const [selectedEvolution, setSelectedEvolution] = useState([]);
    
        return (
            <DigimonContext.Provider value = { { products, loader, error, selectedDigimon, setSelectedDigimon, setSelectedEvolution, selectedEvolution, selectedDigimon2, setSelectedDigimon2 } }>
                { children }
            </DigimonContext.Provider>
        )
}

export const useDigimon = () => useContext(DigimonContext)