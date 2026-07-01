
import { Dropdown } from 'react-bootstrap'
import '../css/skeleton.css'

const Skeleton = () => {
  return (
    <Dropdown.Item className='option-item'>
        <div className='skeleton-image skeleton'></div>
        <div className='skeleton skeleton-text'></div>
    </Dropdown.Item> 
  )
}

export default Skeleton