import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  // Handle registration
  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tasks31-backend.onrender.com/register', { username, password });
      setMessage('Registration successful!');
    } catch (error) {
      setMessage('Registration failed.');
    }
  };

  // Handle login
  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tasks31-backend.onrender.com/login', { username, password });
      setToken(response.data.token);
      setMessage('Login successful!');
    } catch (error) {
      setMessage('Login failed.');
    }
  };

  // Access protected route
  const accessProtected = async () => {
    try {
      const response = await axios.get('https://tasks31-backend.onrender.com/protected', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(`Protected data: ${response.data.message}`);
    } catch (error) {
      setMessage('Access denied.');
    }
  };

  return (
    <div className="App">
      <h1>JWT Auth Example</h1>

      {/* Registration Form */}
      <form onSubmit={register}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>

      {/* Login Form */}
      <form onSubmit={login}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      {/* Access Protected Route */}
      {token && (
        <div>
          <h2>Access Protected Route</h2>
          <button onClick={accessProtected}>Access Protected Data</button>
        </div>
      )}

      {/* Message Display */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
