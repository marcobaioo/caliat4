import React, { useState } from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    console.log('Logout effettuato');
    // Qui aggiungeremo il reindirizzamento alla schermata di accesso
  };

  const handleAddEvent = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="profile-icon" onClick={toggleMenu}>
          <span>👤</span> {/* Icona del profilo */}
          {isMenuOpen && (
            <div className="dropdown-menu">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
        <h1 className="dashboard-title">Caliat4</h1>
      </div>
      <p className="dashboard-subtitle">Gestisci i tuoi eventi qui.</p>
      <button className="add-event-button" onClick={handleAddEvent}>
        Aggiungi Evento
      </button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Crea un nuovo evento</h2>
            <form>
              <input type="text" placeholder="Titolo" />
              <input type="date" />
              <textarea placeholder="Motivo"></textarea>
              <button type="submit">Salva</button>
              <button type="button" onClick={handleClosePopup}>Annulla</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;