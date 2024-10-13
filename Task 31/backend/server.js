const express = require('express');
const bodyParser = require('body-parser'); 
const jwt = require('jsonwebtoken'); 
const cors = require('cors'); 

const app = express();
const PORT = 5000; 

app.use(bodyParser.json()); 
app.use(cors()); 

let users = [];

const JWT_SECRET = 'simple_secret_key';

app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Please provide a username and password');
  }

  users.push({ username, password });
  res.send('Registration successful!'); 
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(400).send('Invalid username or password');
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });

  // Send the token back to the frontend
  res.json({ token });
});

// 3. Protected route:
app.get('/protected', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).send('You need to be logged in to access this route');
  }

  // Verify the token
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send('Invalid token');
    }
    res.json({ message: 'Welcome to the protected route!' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
