const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// Allow requests from the Vite frontend
app.use(cors({
    origin: true, // Allows requests from any origin
    credentials: true, // To allow cookies from the frontend
}));

app.use(cookieParser());
app.use(express.json());

const PORT = 3000;

// Route to set a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'NabeelRahman', {
        httpOnly: true,
        secure: false, // Change to true if serving over HTTPS
        sameSite: 'None', // Important for cross-origin requests
    });
    res.status(200).json({ message: 'Cookie set successfully!' });
});

// Route to retrieve cookie
// Route to retrieve cookie
app.get('/get-cookie', (req, res) => {
    const cookie = req.cookies.username;
    if (cookie) {
        res.status(200).json({ message: `Cookie value: ${cookie}` });
    } else {
        res.status(404).json({ message: 'No cookie found' });
    }
});



// Route for 200 response code
app.get('/success', (req, res) => {
    res.status(200).json({ message: 'Success!' });
});

// Route for 201 response code
app.post('/created', (req, res) => {
    const { name } = req.body; // Assuming you're sending { name: 'New Resource' }
    res.status(201).json({ message: `Resource '${name}' created!` });
});

// Route for 400 response code
app.get('/bad-request', (req, res) => {
    res.status(400).json({ error: 'Bad Request' });
});

// Route for 404 response code
app.get('/not-found', (req, res) => {
    res.status(404).json({ error: 'Resource not found' });
});

// Route for 500 response code
app.get('/server-error', (req, res) => {
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
