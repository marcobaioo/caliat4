import React from 'react';
import EventItem from './EventItem';
import '../styles/EventList.css';

const EventList = ({ events, onUpdate, onDelete }) => {
  return (
    <div className="event-list">
      {events.map((event, index) => (
        <EventItem
          key={index}
          event={event}
          onUpdate={(updatedEvent) => onUpdate(index, updatedEvent)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default EventList;