# Task 31

This project demonstrates a simple implementation of JWT (JSON Web Token) authentication using Express.js for the backend and React with Vite for the frontend. It allows users to register, log in, and access protected routes.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)

## Technologies Used
- **Backend:** Node.js, Express, JSON Web Token (JWT), CORS
- **Frontend:** React, Vite, Axios

## Backend Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-name>
2. Navigate to the backend directory:

3. Install dependencies:

4. Run the server:
   ```
   node server.js
The server will run on http://localhost:5000.

### Frontend Setup
1. Navigate to the frontend directory:

2. Install dependencies:

3. Run the development server:

The frontend will be available on the default port (usually http://localhost:3000).

### Usage
-To register, fill out the registration form with a username and password and submit it.
-To log in, enter the registered username and password, and submit the login form. You will receive a JWT token.
-After logging in, you can access the protected route by clicking the corresponding button, which will send the JWT token in the request headers.
