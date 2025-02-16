import React, { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Stato per gestire i messaggi di errore

  const handleLogin = (e) => {
    e.preventDefault();

    // Validazione semplice
    if (!username.trim() || !password.trim()) {
      setError('Username e password sono obbligatori.');
      return;
    }

    // Simulazione di un accesso riuscito
    setError('');
    console.log('Accesso riuscito:', username);
    // Qui aggiungeremo il reindirizzamento alla pagina principale
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
        {error && <p className="login-error">{error}</p>} {/* Mostra il messaggio di errore */}
        <button type="submit" className="login-button">Accedi</button>
      </form>
    </div>
  );
};

export default Login;