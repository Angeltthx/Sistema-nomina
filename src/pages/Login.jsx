import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLock } from 'react-icons/fa'
import '../style/login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    if (email === 'admin@empresa.com' && password === '1234') {
      navigate('/inicio')
    } else {
      setMessage('❌ Usuario o contraseña incorrectos')
    }
  }

  return (
    <div className="login-page gradient-background">
      <header className="login-header">
        <h1>
          <FaLock size={28} style={{ marginRight: '8px' }} />
          Sistema de Nómina
        </h1>
        <p className="login-subtitle">Accede al panel de administración</p>
      </header>
      
      <div className="login-container">
        <div className="login-box glass-effect">
          <h2>Bienvenido</h2>
          <p className="login-info">Ingresa tus credenciales para continuar</p>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Ingresar</button>
            {message && <p className="error-message">{message}</p>}
          </form>
        </div>
      </div>
      
      <footer className="login-footer">
        <p>&copy; 2025 Mi Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

