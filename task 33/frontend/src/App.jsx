import React, { useState } from 'react';

function App() {
    const [message, setMessage] = useState('');
    const [statusCode, setStatusCode] = useState(null);

    const handleSetCookie = async () => {
        try {
            const response = await fetch('http://localhost:3000/set-cookie', {
                method: 'GET',
                credentials: 'include',
            });
            const data = await response.json();
            setMessage(data.message);
            setStatusCode(response.status);
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while setting the cookie.');
        }
    };

    const handleGetCookie = async () => {
        try {
            const response = await fetch('http://localhost:3000/get-cookie', {
                method: 'GET',
                credentials: 'include',
            });
            const data = await response.json();
            setMessage(data.message || data.error);
            setStatusCode(response.status);
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while retrieving the cookie.');
        }
    };

    const handleSuccess = async () => {
        try {
            const response = await fetch('http://localhost:3000/success', {
                method: 'GET',
            });
            const data = await response.json();
            setMessage(data.message);
            setStatusCode(response.status);
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred.');
        }
    };

    const handleCreated = async () => {
        try {
            const response = await fetch('http://localhost:3000/created', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: 'New Resource' }),
            });
            const data = await response.json();
            setMessage(data.message);
            setStatusCode(response.status);
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while creating the resource.');
        }
    };

    const handleBadRequest = async () => {
        try {
            const response = await fetch('http://localhost:3000/bad-request', {
                method: 'GET',
            });
            const data = await response.json();
            setMessage(data.error);
            setStatusCode(response.status);
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred.');
        }
    };

    const handleNotFound = async () => {
        try {
            const response = await fetch('http://localhost:3000/not-found', {
                method: 'GET',
            });
            const data = await response.json();
            setMessage(data.error);
            setStatusCode(response.status);
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred.');
        }
    };

    const handleServerError = async () => {
        try {
            const response = await fetch('http://localhost:3000/server-error', {
                method: 'GET',
            });
            const data = await response.json();
            setMessage(data.error);
            setStatusCode(response.status);
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred.');
        }
    };

    return (
      <div>
      <h2>Cookie and Response Code Handler</h2>
        <div style={{display: "flex"}} className="App">
            <div>
            <button style={{margin: "5px"}} onClick={handleSetCookie}>Set Cookie</button> <br />
            <button style={{margin: "5px"}}  onClick={handleGetCookie}>Get Cookie</button> <br />
            <button style={{margin: "5px"}}  onClick={handleSuccess}>200 Success</button><br />
            <button style={{margin: "5px"}}  onClick={handleCreated}>201 Created</button><br />
            <button style={{margin: "5px"}}  onClick={handleBadRequest}>400 Bad Request</button><br />
            <button style={{margin: "5px"}}  onClick={handleNotFound}>404 Not Found</button><br />
            <button style={{margin: "5px"}}  onClick={handleServerError}>500 Server Error</button><br />
            </div>
            <div>
            <p>Status Code: {statusCode !== null ? statusCode : 'N/A'}</p>
            <p>Message: {message}</p>
            </div>
        </div>
        </div>
    );
}

export default App;
