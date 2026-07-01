import { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const SelectorItem = ({digimon, onSelect}) => {
  useEffect(()=> {
          console.log(digimon)
      }, [digimon])
  return (
    <>
        {digimon.map((products) => (
            <Dropdown.Item key={products.id} className='option-item' onClick={() => onSelect(products)}>
                <img src={products.icon} alt={products.nombre}/>
                <span>{products.nombre}</span>
            </Dropdown.Item>  
        ))}
    </>
  )
}

export default SelectorItem