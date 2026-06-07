const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory session history (for demo purposes)
const sessions = {};

app.post('/chat', (req, res) => {
  const { message, userId = 'default' } = req.body;
  
  if (!sessions[userId]) {
    sessions[userId] = [];
  }
  
  // Save user message
  sessions[userId].push({ role: 'user', content: message });
  
  // Simple echo / proxy logic
  // In a real scenario, you would call an LLM API here
  const reply = `I received your message: "${message}". I'm a Ghibli-themed bot!`;
  
  // Save assistant reply
  sessions[userId].push({ role: 'assistant', content: reply });
  
  console.log(`User: ${message}`);
  console.log(`Reply: ${reply}`);
  
  res.json({ reply });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});