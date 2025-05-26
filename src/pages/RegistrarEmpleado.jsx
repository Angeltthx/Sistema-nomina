import React, { useState } from 'react'
import '../style/registrarEmpleado.css'
import { FaUserPlus, FaEdit, FaTrash, FaArrowLeft, FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function RegistrarEmpleado() {
  const navigate = useNavigate()
  const [modo, setModo] = useState('registrar')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (modo === 'registrar') {
      alert('Empleado registrado exitosamente ✅')
    } else if (modo === 'editar') {
      alert('Empleado actualizado correctamente ✏️')
    } else if (modo === 'eliminar') {
      alert('Empleado eliminado exitosamente ❌')
    }
    navigate('/inicio')
  }

  return (
    <div className="registro-empleado-page">
      <header className="registro-header">
        <div className="registro-title">
          {modo === 'registrar' && <FaUserPlus size={24} />}
          {modo === 'editar' && <FaEdit size={24} />}
          {modo === 'eliminar' && <FaTrash size={24} />}
          <h1>
            {modo === 'registrar' && 'Registrar Empleado'}
            {modo === 'editar' && 'Editar Empleado'}
            {modo === 'eliminar' && 'Eliminar Empleado'}
          </h1>
        </div>
        <p className="registro-subtitle">
          {modo === 'registrar' && 'Completa los datos para agregar un nuevo empleado'}
          {modo === 'editar' && 'Modifica los datos del empleado existente'}
          {modo === 'eliminar' && 'Selecciona el empleado que deseas eliminar'}
        </p>
      </header>

      <div className="gestion-wrapper">
        <aside className="sidebar-gestion">
          <h2 className="sidebar-gestion-title">Opciones</h2>
          <nav className="sidebar-nav-gestion">
            <button
              className={`nav-button-gestion ${modo === 'registrar' ? 'active' : ''}`}
              onClick={() => setModo('registrar')}
            >
              <FaUserPlus /> Registrar
            </button>
            <button
              className={`nav-button-gestion ${modo === 'editar' ? 'active' : ''}`}
              onClick={() => setModo('editar')}
            >
              <FaEdit /> Editar
            </button>
            <button
              className={`nav-button-gestion ${modo === 'eliminar' ? 'active' : ''}`}
              onClick={() => setModo('eliminar')}
            >
              <FaTrash /> Eliminar
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
          {modo === 'registrar' && (
            <form className="registro-form" onSubmit={handleSubmit}>
              <label>Nombre completo</label>
              <input type="text" required placeholder="Ej: Laura Gómez" />

              <label>Cédula</label>
              <input type="text" required placeholder="Ej: 123456789" />

              <label>Cargo</label>
              <input type="text" required placeholder="Ej: Contadora" />

              <label>Salario mensual</label>
              <input type="number" required placeholder="Ej: 2800000" />

              <label>Correo electrónico</label>
              <input type="email" placeholder="Ej: laura@example.com" />

              <div className="registro-buttons">
                <button type="button" className="cancelar-btn" onClick={() => navigate('/inicio')}>
                  <FaArrowLeft /> Cancelar
                </button>
                <button type="submit" className="guardar-btn">
                  Guardar Empleado
                </button>
              </div>
            </form>
          )}

          {modo === 'editar' && (
            <form className="registro-form" onSubmit={handleSubmit}>
              <label>Cédula del empleado</label>
              <input type="text" required placeholder="Buscar por cédula" />

              <label>Nuevo Cargo</label>
              <input type="text" placeholder="Ej: Administradora" />

              <label>Nuevo Salario</label>
              <input type="number" placeholder="Ej: 3200000" />

              <div className="registro-buttons">
                <button type="submit" className="guardar-btn">
                  Actualizar Empleado
                </button>
              </div>
            </form>
          )}

          {modo === 'eliminar' && (
            <form className="registro-form" onSubmit={handleSubmit}>
              <label>Cédula del empleado a eliminar</label>
              <input type="text" required placeholder="Ej: 123456789" />

              <div className="registro-buttons">
                <button type="submit" className="guardar-btn" style={{ backgroundColor: '#c62828' }}>
                  Eliminar Empleado
                </button>
              </div>
            </form>
          )}

          <footer className="registro-footer">
            <p>&copy; 2025 ElBosque Investments · Todos los derechos reservados.</p>
          </footer>
        </main>
      </div>
    </div>
  )
}
