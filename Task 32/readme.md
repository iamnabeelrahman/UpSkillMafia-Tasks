# Full Stack Application README

## Project Overview
This is a full-stack web application that allows users to register, log in, save user details, and retrieve their saved details. The backend is built with Node.js, Express, MongoDB, and JWT authentication, while the frontend is built using React and React Router.

## Features
- User registration and login.
- JWT-based authentication.
- Saving and retrieving user details.
- Protected routes accessible only after logging in.
  
## Technologies Used
### Backend:
- **Node.js**: JavaScript runtime used to build the backend.
- **Express.js**: Web framework for Node.js.
- **MongoDB & Mongoose**: NoSQL database and Object Data Modeling (ODM) for MongoDB.
- **Bcrypt.js**: For hashing passwords.
- **JWT (JSON Web Token)**: For secure authentication and authorization.
- **dotenv**: For managing environment variables.
- **CORS**: Cross-Origin Resource Sharing to allow frontend to interact with backend APIs.

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **React Router**: For handling client-side routing.
- **Vite**: Build tool used to create a fast development environment.

## Folder Structure

```
/project-root
│
├── /frontend               # React frontend code
│   ├── /src
│   │   ├── /components     # React components
│   │   ├── App.js          # Main React component
│   │   ├── index.js        # Entry point of the React app
│   │   └── ...
│   └── package.json        # Frontend dependencies
│
├── /backend                # Backend Node.js code
│   ├── /Models             # Mongoose models
│   │   ├── register.models.js   # User registration schema
│   │   └── userDetails.models.js  # User details schema
│   ├── .env                # Environment variables (JWT_SECRET, DB connection string)
│   ├── server.js           # Main server file
│   └── package.json        # Backend dependencies
│
└── README.md               # This README file
```

## Backend Setup

1. **Install Dependencies**:
   Navigate to the `backend` folder and run:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   JWT_SECRET=your_secret_key
   PORT=3000
   ```

3. **Run the Server**:
   Run the server using:
   ```bash
   node server.js
   ```

4. **MongoDB Setup**:
   - Use MongoDB Atlas or a local MongoDB instance.
   - The connection string is already provided in the code for MongoDB Atlas. Replace it with your credentials if needed.

## Frontend Setup

1. **Install Dependencies**:
   Navigate to the `frontend` folder and run:
   ```bash
   npm install
   ```

2. **Run the React App**:
   Run the frontend using Vite:
   ```bash
   npm run dev
   ```

3. **Access the Application**:
   - The backend will run on `http://localhost:3000`
   - The frontend will run on `http://localhost:5173`

## API Endpoints

### Authentication
- **POST** `/register`: Register a new user.
- **POST** `/login`: Log in with username and password.

### User Details (Protected Routes)
- **POST** `/save`: Save user details (requires token).
- **GET** `/read`: Read user details (requires token).

## Frontend Pages
- **Register Page**: Allows new users to register.
- **Login Page**: Allows existing users to log in and get access to protected routes.
- **User Profile Page**: A protected page for submitting user details.
- **User Details Page**: Displays saved user details.

## Frontend Token Handling
The token received during login is stored in `localStorage` and is used to access protected routes in the app.

## Deployment
You can deploy the backend and frontend separately on platforms like:
- **Backend**: Render, Heroku, or any Node.js hosting platform.
- **Frontend**: Netlify, Vercel, or any static site hosting service.

## License
This project is open-source and free to use.

