const SkeletonIcon = () => {
  return (
    <>
        
        <h2>Linea Evolutiva</h2>
        <div className="evolve-container">
          <div>
            <h3 style={{textAlign: 'center'}}>Pre-Evoluciones</h3>
            <div className="evolve-third-line evolve-column" 
                  >
              {
                Array.from({ length: 6 }, (_, index) => (
                    <div className="skeleton skeleton-icon" key={index}/>
                ))
              }
            </div>
          </div>
          <div >
            <h3>Digimon</h3>
            <div className=" evolve-column center">
              <div className="skeleton skeleton-icon"/>
            </div>
          </div>
          <div>
            <h3>Evoluciones</h3>
            <div className="evolve-third-line evolve-column">
              {
                Array.from({ length: 6 }, (_, index) => (
                    <div className="skeleton skeleton-icon" key={index}/>
                ))
              }
            </div>
          </div>
        </div>
        
    </>
  )
}

export default SkeletonIcon