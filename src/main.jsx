import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Index from './pages/Index.jsx'
import ReporteNomina from './pages/ReporteNomina.jsx'
import Configuracion from './pages/configuracion.jsx'
import RegistrarEmpleado from './pages/RegistrarEmpleado.jsx'
import Nomina from './pages/Nomina.jsx' // 👈 IMPORTAMOS AQUÍ

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Index />} />
        <Route path="/reporte-nomina" element={<ReporteNomina />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/registrar-empleado" element={<RegistrarEmpleado />} />
        <Route path="/nomina" element={<Nomina />} /> {/* 👈 RUTA AGREGADA */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
