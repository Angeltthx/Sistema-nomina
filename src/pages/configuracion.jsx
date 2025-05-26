import React, { useState } from 'react';
import '../style/configuracion.css';
import { FaUser, FaCog, FaHome } from 'react-icons/fa'; 

export default function Configuracion() {
  const [activeSection, setActiveSection] = useState('perfil');

  const renderSection = () => {
    switch (activeSection) {
      case 'perfil':
        return (
          <>
            <div className="gestion-header">
              <h2><FaUser /> Ajustes del Usuario</h2>
            </div>
            <form className="registro-form">
              <label>Nombre de usuario</label>
              <input type="text" placeholder="Nombre de usuario" />
              <label>Correo electrónico</label>
              <input type="email" placeholder="Correo electrónico" />
              <label>Nueva contraseña</label>
              <input type="password" placeholder="Nueva contraseña" />
              <div className="registro-buttons">
                <button type="submit" className="guardar-btn">Guardar cambios</button>
                <button type="button" className="cancelar-btn">Cancelar</button>
              </div>
            </form>
          </>
        );
      case 'sistema':
        return (
          <>
            <div className="gestion-header">
              <h2><FaCog /> Parámetros del Sistema</h2>
            </div>
            <form className="registro-form">
              <label>Idioma de la interfaz</label>
              <input type="text" placeholder="Español / Inglés" />
              <label>Zona horaria</label>
              <input type="text" placeholder="GMT-5 / UTC+1" />
              <label>Frecuencia de respaldo</label>
              <input type="text" placeholder="Diario / Semanal" />
              <div className="registro-buttons">
                <button type="submit" className="guardar-btn">Guardar configuración</button>
                <button type="button" className="cancelar-btn">Cancelar</button>
              </div>
            </form>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="registro-empleado-page">
      <header className="registro-header">
        <h1 className="registro-title"><FaCog /> Configuración General</h1>
        <p className="registro-subtitle">Administra tu cuenta y el sistema según tus preferencias</p>
      </header>

      <div className="gestion-wrapper">
        <aside className="sidebar-gestion">
          <div className="sidebar-title-gestion">Secciones</div>
          <div className="sidebar-subtitle-gestion">Ajustes disponibles</div>
          <nav className="sidebar-nav-gestion">
            <button
              className={`nav-button-gestion ${activeSection === 'perfil' ? 'active' : ''}`}
              onClick={() => setActiveSection('perfil')}
            >
              <FaUser /> Usuario
            </button>
            <button
              className={`nav-button-gestion ${activeSection === 'sistema' ? 'active' : ''}`}
              onClick={() => setActiveSection('sistema')}
            >
              <FaCog /> Sistema
            </button>
            <button
              className="nav-button-gestion volver-inicio"
              onClick={() => window.location.href = '/inicio'}
            >
              <FaHome /> Menú Principal
            </button>
          </nav>
        </aside>

        <main className="gestion-main">
          {renderSection()}
        </main>
      </div>

      <footer className="registro-footer">
        &copy; {new Date().getFullYear()} Configuración del sistema • Proyecto ElBosque
      </footer>
    </div>
  );
}
