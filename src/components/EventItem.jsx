import React, { useState } from 'react';
import '../styles/EventItem.css';

const EventItem = ({ event, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState(event);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(editedEvent);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent({ ...editedEvent, [name]: value });
  };

  return (
    <div className="event-item">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            name="title"
            value={editedEvent.title}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={editedEvent.date}
            onChange={handleChange}
          />
          <textarea
            name="reason"
            value={editedEvent.reason}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Salva</button>
          <button onClick={() => setIsEditing(false)}>Annulla</button>
        </div>
      ) : (
        <div className="event-content">
          <h3>{event.title}</h3>
          <p>Data: {event.date}</p>
          <p>Motivo: {event.reason}</p>
          <button onClick={handleEdit}>Modifica</button>
          <button onClick={onDelete}>Elimina</button>
        </div>
      )}
    </div>
  );
};

export default EventItem;