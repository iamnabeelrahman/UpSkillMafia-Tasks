const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./Models/register.models");
const UserDetail = require("./Models/userDetails.models");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token required');

  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send('Invalid token');
    req.user = decoded;
    next();
  });
};

// Registration endpoint
app.post("/register", async function (req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Login endpoint
app.post("/login", async function (req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Login failed" });
  }
});

// Save user details endpoint
app.post('/save', verifyToken, async function (req, res) {
  const { name, email, age, instaUsername } = req.body;

  const newUserDetail = new UserDetail({ name, email, age, instaUsername });
  try {
    await newUserDetail.save();
    return res.status(201).json({ msg: "Details saved successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
});

// Read user details endpoint
app.get('/read', verifyToken, async function(req, res) {
  const username = req.user.username; // Get the username from the token
  try {
    const userDetails = await UserDetail.findOne({ username }); // Adjust this line
    if (!userDetails) {
      return res.status(404).json({ error: "User details not found" });
    }
    return res.json({ userDetails }); // Return user details for the logged-in user
  } catch (error) {
    console.error("Error retrieving user details:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
