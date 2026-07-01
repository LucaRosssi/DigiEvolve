import './App.css'
import Body from './compoonents/BodyContainer'
import { DigimonProvider } from './context/DigimonContext'
// import Databse from './sevice/Databse'

function App() {

  return (
    <>
    <DigimonProvider>
      <Body/>
      {/* <Databse/> */}
    </DigimonProvider>
    </>
  )
}

export default App
