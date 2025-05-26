import React, { useState } from 'react'
import '../style/nomina.css'
import {
  FaRegMoneyBillAlt,
  FaFileInvoice,
  FaRegAddressBook,
  FaShieldAlt,
  FaHome,
  FaFileAlt  
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function Nomina() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('liquidacion')

  const renderContent = () => {
    switch (activeSection) {
      case 'liquidacion':
        return (
          <div className="nomina-section">
            <div className="nomina-subsection">
              <h2 className="section-title">
                <FaFileInvoice /> Liquidación de Nómina
              </h2>
              <p className="section-description">
                Aquí se calcularán los pagos, bonificaciones y deducciones del mes.
              </p>
              <div className="placeholder">[Contenido de Liquidación de Nómina]</div>
            </div>
            <hr className="divider" />
            <div className="nomina-subsection">
              <h2 className="section-title">
                <FaRegMoneyBillAlt /> Liquidación Definitiva
              </h2>
              <p className="section-description">
                Cálculos finales cuando se concluye una relación laboral.
              </p>
              <div className="placeholder">[Contenido de Liquidación Definitiva]</div>
            </div>
          </div>
        )
      case 'cesantias':
        return (
          <div className="nomina-section">
            <h2 className="section-title">
              <FaRegAddressBook /> Cesantías y Prestaciones
            </h2>
            <p className="section-description">
              Genera el cálculo de cesantías, primas, vacaciones y demás prestaciones sociales.
            </p>
            <div className="placeholder">[Contenido de Cesantías y Prestaciones]</div>
          </div>
        )
      case 'seguridad':
        return (
          <div className="nomina-section">
            <h2 className="section-title">
              <FaShieldAlt /> Seguridad Social
            </h2>
            <p className="section-description">
              Consulta los aportes a seguridad social, pensión y riesgos laborales.
            </p>
            <div className="placeholder">[Contenido de Seguridad Social]</div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="nomina-page">
      <header className="nomina-header">
        <div className="header-icon-title">
          <FaFileAlt size={32} className="header-icon" />
          <h1>Gestión de Nómina</h1>
        </div>
        <p className="nomina-subtitulo">
          Administra liquidaciones, prestaciones y aportes de seguridad social
        </p>
      </header>

      <div className="nomina-wrapper">
        <aside className="nomina-sidebar">
          <h2 className="sidebar-nomina-title">Opciones</h2>
          <nav className="sidebar-nomina-nav">
            <button
              className={`nav-button-nomina ${activeSection === 'liquidacion' ? 'active' : ''}`}
              onClick={() => setActiveSection('liquidacion')}
            >
              <FaFileInvoice /> Liquidación Nómina
            </button>
            <button
              className={`nav-button-nomina ${activeSection === 'cesantias' ? 'active' : ''}`}
              onClick={() => setActiveSection('cesantias')}
            >
              <FaRegAddressBook /> Cesantías y prestaciones
            </button>
            <button
              className={`nav-button-nomina ${activeSection === 'seguridad' ? 'active' : ''}`}
              onClick={() => setActiveSection('seguridad')}
            >
              <FaShieldAlt /> Seguridad Social
            </button>
            <button
              className="nav-button-nomina volver-principal"
              onClick={() => navigate('/inicio')}
            >
              <FaHome /> Menú Principal
            </button>
          </nav>
        </aside>

        <main className="nomina-main">{renderContent()}</main>
      </div>

      <footer className="nomina-footer">
        <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
   