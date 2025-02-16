const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Percorso del file JSON per gli eventi
const eventsFilePath = path.join(__dirname, 'data', 'events.json');

// Endpoint per ottenere gli eventi
app.get('/api/events', (req, res) => {
  fs.readFile(eventsFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Errore nel leggere gli eventi' });
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint per aggiungere un evento
app.post('/api/events', (req, res) => {
  const newEvent = req.body;
  fs.readFile(eventsFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Errore nel leggere gli eventi' });
    }
    const events = JSON.parse(data);
    events.push(newEvent);
    fs.writeFile(eventsFilePath, JSON.stringify(events, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Errore nel salvare l\'evento' });
      }
      res.json(newEvent);
    });
  });
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});