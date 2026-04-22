import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Landing } from './Pages/Landing/Landing'
import { Tienda } from './Pages/Tienda/Tienda'
import { GaleriaPage } from './Pages/GaleriaPage/GaleriaPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/galeria" element={<GaleriaPage />} />
      </Routes>
    </div>
  )
}

export default App
