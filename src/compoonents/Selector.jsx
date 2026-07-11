import { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosArrowDropdown } from "react-icons/io";
import "../css/selector.css"
import SelectorItem from './SelectorItem';
import Skeleton from './Skeleton';


const Selector = ({ products = [], loader, error, digimon, setDigimon, type, clear, text, especial }) => {
    const [open, setOpen] = useState(false);
    const [order, setOrder] = useState([]);

    // Ordenar los productos por nombre cuando se actualiza la lista de productos
    useEffect(() => {
        if (products !== null && products.length > 0) {
            const sortedDigimon = [...products].sort((a, b) =>
                a.nombre.localeCompare(b.nombre)
            );
            setOrder(sortedDigimon);
        }   else {
            setOrder([]); 
        }
    }, [products]);

     if (loader) return <>
                            <div className="digimon-item" id="currentDigimond">
                                <h3>{text}</h3>
                                    <div className="select">
                                        <Dropdown onToggle={(isOpen) => setOpen(isOpen)}>
                                            <Dropdown.Toggle
                                                variant="dark"
                                                id="dropdown-basic"
                                                className="custom-select a1 pointer"
                                            >
                                                <span className={`${digimon ? '' : 'value'}`}>{digimon ? (
                                                    <>
                                                        <img src={digimon.icon} alt={digimon.nombre} />
                                                        <p className='digimon-text'>{digimon.nombre}</p>
                                                    </>
                                                    ) : (
                                                    "Elige un Digimon"
                                                    )}
                                                </span>
                                                <IoIosArrowDropdown className={`rotate ${open ? 'active' : ''}`}/>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu align="end" id="menuDesplegable1" className='custom-option'>
                                                {Array.from({ length: 8 }, (_, index) => (
                                                    <Skeleton key={index} />
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                            </div>
                        </>
    if (error) return <p>Error: {error.message}</p>;

    const onSelect = (digi) => {
        setDigimon(digi);   
        setOpen(false);
        if (type === "selector1" && clear) {
            clear(); // 
        }
    }   

  return (
    <>
        <div className="digimon-item" id="currentDigimond">
            <h3>{text}</h3>
                <div className="select">
                    <Dropdown onToggle={(isOpen) => setOpen(isOpen)}>
                        <Dropdown.Toggle
                            variant="dark"
                            id="dropdown-basic"
                            className="custom-select a1 pointer"
                        >
                            <span className={`${digimon ? '' : 'value'}`}>{digimon ? (
                                <>
                                    <img src={digimon.icon} alt={digimon.nombre} />
                                    <p className='digimon-text'>{digimon.nombre}</p>
                                </>
                                ) : (
                                "Elige un Digimon"
                                )}
                            </span>
                            <IoIosArrowDropdown className={`rotate ${open ? 'active' : ''}`}/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end" className='custom-option'>
                            { especial ? (
                                <SelectorItem digimon={especial} onSelect={onSelect}/>
                            ) : order.length > 0 ? (
                                <SelectorItem digimon={order} onSelect={onSelect} />
                            ) : (
                                <Dropdown.Item style={{height: '250px', alignItems: 'center', justifyContent: 'center', display: 'flex', textDecoration: 'none', color: 'var(--primary-text-color)'}}>
                                    <span>El digimon no tiene evoluciones</span>
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
        </div>
    </>
  )
}

export default Selector