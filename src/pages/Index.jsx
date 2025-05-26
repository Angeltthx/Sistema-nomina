import React, { useEffect, useState } from 'react';
import '../style/index.css';
import AnimatedCard from '../pages/AnimatedCard';
import { FaUserPlus, FaFileInvoiceDollar, FaChartLine, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const [hora, setHora] = useState(new Date());
  const [saludo, setSaludo] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => setHora(new Date()), 1000);
    const horaActual = new Date().getHours();
    if (horaActual < 12) setSaludo('Buenos días');
    else if (horaActual < 18) setSaludo('Buenas tardes');
    else setSaludo('Buenas noches');

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-page">
      <nav className="dashboard-navbar">
        <div className="navbar-left">🧾 NóminaPRO</div>
        <div className="navbar-right">
          <span className="datetime">
            {saludo}, Administrador — {hora.toLocaleTimeString()}
          </span>
          <button className="logout-button" onClick={() => navigate('/')}>
            <FaSignOutAlt /> Cerrar sesión
          </button>
        </div>
      </nav>

      <header className="dashboard-header fade-in">
        <h1>Sistema de Control de Nómina</h1>
        <p className="user-role">Gestiona empleados, consulta nóminas, genera reportes y configura el sistema</p>
      </header>

      <main className="dashboard-main">
        <AnimatedCard 
          title={<><FaUserPlus /> Gestionar Empleado</>} 
          description="Registra, edita o elimina información de empleados. Controla y monitorea la plantilla de tu empresa." 
          onClick={() => navigate('/registrar-empleado')} 
        />
        <AnimatedCard 
          title={<><FaFileInvoiceDollar /> Ver Nómina</>} 
          description="Consulta los detalles de la liquidación de nómina, revisa pagos, deducciones y movimientos recientes." 
          onClick={() => navigate('/nomina')} 
        />
        <AnimatedCard 
          title={<><FaChartLine /> Generar Reportes</>} 
          description="Genera reportes detallados de salarios y deducciones, ideal para análisis financiero y auditorías." 
          onClick={() => navigate('/reporte-nomina')} 
        />
        <AnimatedCard 
          title={<><FaCogs /> Configuración</>} 
          description="Ajusta y personaliza los parámetros del sistema, desde la interfaz hasta detalles operativos." 
          onClick={() => navigate('/configuracion')} 
        />
      </main>

      <footer className="dashboard-footer">
        <p>&copy; 2025 Mi Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
