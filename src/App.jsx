import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Inicio from './pages/Inicio'
import Configuracion from './pages/configuracion.jsx'
import ReporteNomina from './pages/ReporteNomina.jsx' 

const RegistrarEmpleado = () => <h1>Registrar Empleado - En desarrollo</h1>
const Nomina = () => <h1>Nómina - En desarrollo</h1>
const Reportes = () => <h1>Reportes - En desarrollo</h1>

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* NAVBAR */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">🏠 Inicio</Link></li>
            <li><Link to="/configuracion">⚙️ Configuración</Link></li>
            <li><Link to="/reporte-nomina">📄 Reporte Nómina</Link></li> {/* 👈 Link agregado */}
          </ul>
        </nav>

        {/* VISTAS */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="/registrar-empleado" element={<RegistrarEmpleado />} />
          <Route path="/nomina" element={<Nomina />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/reporte-nomina" element={<ReporteNomina />} /> {/* 👈 Ruta agregada */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
