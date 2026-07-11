import './App.css'
import Body from './compoonents/BodyContainer'
import Title from './compoonents/Title'
import { DigimonProvider } from './context/DigimonContext'
// import Databse from './sevice/Databse'

function App() {

  return (
    <>
    <DigimonProvider>
      <Title/>
      <Body/>
      {/* <Databse/> */}
    </DigimonProvider>
    </>
  )
}

export default App
