const express = require('express');
const cors = require('cors');
const { analyzeMood } = require('./sentimentHelper');
const { buildBotResponse } = require('./responses');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Mental Health Companion Chatbot backend is running.' });
});

app.post('/api/chat', (req, res) => {
  const { message } = req.body || {};
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Please send a valid message in the request body.' });
  }

  const moodData = analyzeMood(message);
  const botAnswer = buildBotResponse(message, moodData);

  res.json({
    userMessage: message,
    moodAnalysis: moodData,
    botAnswer
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
