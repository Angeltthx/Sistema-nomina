import React from 'react'
import { FaDownload, FaFileAlt, FaHome, FaSearch } from 'react-icons/fa' 
import { useNavigate } from 'react-router-dom'
import '../style/reporteNomina.css'

export default function ReporteNomina() {
  const navigate = useNavigate()

  return (
    <div className="reporte-nomina-page">
      <header className="registro-header">
        <div className="registro-title">
          <FaFileAlt size={26} />
          <h1>Reporte de Nómina</h1>
        </div>
        <p className="registro-subtitle">
          Historial de pagos y movimientos registrados en el sistema
        </p>
      </header>

      <div className="gestion-wrapper">
        <aside className="sidebar-gestion">
          <div className="sidebar-title-gestion">
            <FaFileAlt /> Opciones
          </div>
          <div className="sidebar-subtitle-gestion">Accesos rápidos</div>
          <nav className="sidebar-nav-gestion">
            <button
              className="nav-button-gestion"
              onClick={() => alert('Exportación en proceso...')}
            >
              <FaDownload /> Exportar PDF
            </button>
            <button
              className="nav-button-gestion volver-inicio"
              onClick={() => navigate('/inicio')}
            >
              <FaHome /> Menú Principal
            </button>
          </nav>
        </aside>

        <main className="gestion-main">
          <div className="reporte-filtros">
            <div className="input-icon-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Buscar por nombre..."
              />
            </div>
            <input type="date" />
          </div>

          <div className="reporte-nomina-container fade-in-up">
            <table className="reporte-nomina-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Cargo</th>
                  <th>Salario</th>
                  <th>Fecha de Pago</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Juan Pérez</td>
                  <td>Desarrollador</td>
                  <td>$3,000,000</td>
                  <td>01/04/2025</td>
                </tr>
                <tr>
                  <td>Ana Torres</td>
                  <td>Diseñadora</td>
                  <td>$2,800,000</td>
                  <td>01/04/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <footer className="registro-footer">
        <p>&copy; 2025 ElBosque Investments — Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
