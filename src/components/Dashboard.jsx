import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventList from './EventList';
import EventForm from './EventForm';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  // Carica gli eventi salvati al montaggio del componente
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(savedEvents);

    const user = localStorage.getItem('loggedInUser');
    if (user) {
      setLoggedInUser(user);
    } else {
      navigate('/'); // Reindirizza al login se non c'è un utente loggato
    }
  }, [navigate]);

  // Salva gli eventi in localStorage ogni volta che cambiano
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // Rimuove l'utente loggato
    localStorage.removeItem('events'); // Rimuove gli eventi (opzionale)
    navigate('/'); // Reindirizza al login
  };

  const handleAddEvent = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSaveEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents)); // Salva immediatamente
    setIsPopupOpen(false);
  };

  const handleUpdateEvent = (index, updatedEvent) => {
    const updatedEvents = [...events];
    updatedEvents[index] = updatedEvent;
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents)); // Salva immediatamente
  };

  const handleDeleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents)); // Salva immediatamente
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="profile-icon" onClick={toggleMenu}>
          <span>👤 {loggedInUser}</span> {/* Mostra il nome dell'utente loggato */}
          {isMenuOpen && (
            <div className="dropdown-menu">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
        <h1 className="dashboard-title">Caliat4</h1>
        <button className="add-event-button" onClick={handleAddEvent}>
          Aggiungi Evento
        </button>
      </div>
      <p className="dashboard-subtitle">Gestisci i tuoi eventi qui.</p>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Crea un nuovo evento</h2>
            <EventForm onSave={handleSaveEvent} onCancel={handleClosePopup} />
          </div>
        </div>
      )}
      <EventList
        events={events}
        onUpdate={handleUpdateEvent}
        onDelete={handleDeleteEvent}
      />
    </div>
  );
};

export default Dashboard;