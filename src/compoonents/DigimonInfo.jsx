import { useState, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'motion/react'
import '../css/digimonInfo.css'
import '../css/skeleton.css'
import Requisitos from './Requisitos';
import SkeletonImage from './SkeletonImage';
import SkeletonIcon from './SkeletonIcon';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const Evoluciones = lazy(()=> import('./Evoluciones'));

const DigimonInfo = ({digimon, loader}) => {
  
  const [ view, setView ] = useState(true);
  const { t } = useTranslation();


  const changeView = () => {
    setView(!view)
  }

  return (
    <>
      <section className="digimon-field" id="digimonConteiner">
          <div className="digimon-ficha">
              <h1>{digimon.nombre}</h1>
              { loader ? (
                <SkeletonImage /> 
              ) : (
                <img src={digimon.imagen} alt={digimon.nombre} className="digimon-picture" title={digimon.nombre} fetchPriority="high"/>
              )}
          </div>
          <div className="evolve-requirements">
              <div>
                <AnimatePresence mode="wait">
                  {view === true ? (
                    <motion.div
                      key="requisitos"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2 }}
                      className='view-transition'
                    >
                      <Requisitos digimon={digimon}/>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="evoluciones"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className='view-transition'
                    >
                      <Suspense fallback={<SkeletonIcon key={digimon.id}/>}>
                        <Evoluciones digimon={digimon}/>
                      </Suspense>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="linea-evolutiva">
                { view === true ? 
                  <button id="openModal" className="evolve-btn" onClick={()=>changeView()}>
                    {t('info.evolutionBtn')}
                  </button> : (
                  <button id="openModal" className="evolve-btn" onClick={()=>changeView()}>
                    {t('info.requirementsBtn')}
                  </button>
                )}
              </div>
          </div>
      </section>
    </>
  )
}

export default DigimonInfo