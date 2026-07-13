import './App.css'
import { DigimonProvider } from './context/DigimonContext'
import { BrowserRouter } from "react-router";
import AppRoute from './compoonents/AppRoute';
// import Databse from './sevice/Databse'

function App() {

  return (
    <>
    <BrowserRouter>
    <DigimonProvider>
      <AppRoute/>
      {/* <Databse/> */}
    </DigimonProvider>
    </BrowserRouter>
    </>
  )
}

export default App
