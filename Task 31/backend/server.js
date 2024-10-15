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

// Registration route
app.post('/register', (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).send('Please provide a username, password, and email');
  }

  users.push({ username, password, email });
  res.send('Registration successful!');
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(400).send('Invalid username or password');
  }

  // Include the email in the token payload
  const token = jwt.sign({ username, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

// Protected route
app.get('/protected', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).send('You need to be logged in to access this route');
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send('Invalid token');
    }

    res.json({ message: `Welcome to the protected route! Your email is: ${decoded.email}` });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
