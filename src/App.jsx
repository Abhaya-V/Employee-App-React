
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Dashboard from './components/Dashboard'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/form' element={<Form/>}/>

    </Routes>
    </>
  )
}

export default App
