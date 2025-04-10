const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5501;

// Middleware
app.use(cors());
app.use(express.json());
// Serve static files from both public and build directories
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client', 'build')));

// In-memory data store
let pageData = {
  views: 0,
  messages: []
};

// Basic API endpoints
app.get('/api/data', (req, res) => {
  pageData.views++;
  res.json({
    views: pageData.views,
    messages: pageData.messages
  });
});

// HTML Tutorial endpoint
app.get('/api/html-tutorial', (req, res) => {
  res.json({
    title: "HTML Tutorial",
    description: "Learn the structure of web pages",
    lessons: [
      "HTML Basics",
      "Forms and Input",
      "Semantic HTML",
      "Multimedia"
    ],
    difficulty: "Beginner"
  });
});

app.post('/api/message', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  pageData.messages.push(message);
  res.json({ success: true });
});

// Serve card1.html directly
app.get('/card1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'card1.html'));
});

// Serve index.html from public directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Catch-all for React app (keep for backward compatibility)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('GET  /api/data - Get page data');
  console.log('POST /api/message - Add new message');
});
