import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validazione degli utenti
    const validUsers = [
      { username: 'Marco', password: 'Caliatona69' },
      { username: 'Ettore', password: 'AltervistaCaliat0' },
    ];

    const isValidUser = validUsers.some(
      (user) => user.username === username && user.password === password
    );

    if (isValidUser) {
      setError('');
      localStorage.setItem('loggedInUser', username); // Salva l'utente loggato
      navigate('/dashboard'); // Reindirizza alla dashboard
    } else {
      setError('Username o password non validi.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Caliat4</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="login-button">Accedi</button>
      </form>
    </div>
  );
};

export default Login;