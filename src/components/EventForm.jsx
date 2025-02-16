import React, { useState } from 'react';

const EventForm = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, date, reason });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titolo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        placeholder="Motivo"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        required
      />
      <button type="submit">Salva</button>
      <button type="button" onClick={onCancel}>Annulla</button>
    </form>
  );
};

export default EventForm;