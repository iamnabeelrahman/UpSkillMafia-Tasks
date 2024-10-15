import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      localStorage.setItem('token', response.data.token); // Store token in localStorage
      setMessage('Login successful!');
      navigate('/protected'); // Redirect to protected route
    } catch (error) {
      setMessage('Login failed.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /> <br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> <br>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <p>New here? <button onClick={() => navigate('/signup')}>Sign Up</button></p>
    </div>
  );
}

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', { username, password, email });
      setMessage('Registration successful! Redirecting to login...');
      navigate('/login'); // Redirect to login after successful signup
    } catch (error) {
      setMessage('Registration failed.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={register}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

function Protected() {
  const [message, setMessage] = useState('');

  const accessProtected = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('You need to log in to access this page.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/protected', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(`Protected data: ${response.data.message}`);
    } catch (error) {
      setMessage('Access denied.');
    }
  };

  React.useEffect(() => {
    accessProtected();
  }, []);

  return (
    <div>
      <h2>Protected Route</h2>
      <p>{message}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </Router>
  );
}

export default App;
