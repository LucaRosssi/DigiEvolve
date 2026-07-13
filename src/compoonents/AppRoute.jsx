import { Route, Routes } from 'react-router'
import Home from './Home'

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRoute