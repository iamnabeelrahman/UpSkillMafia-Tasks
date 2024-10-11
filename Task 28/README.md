# UpSkillMafia Task 28

This is a full-stack To-Do List application built with Node.js, Express, MongoDB and React. The application allows users to create, read, update, and delete to-do items. CORS has been enabled for API communication between the frontend and backend.

## Features

- Users can create to-dos.
- Users can view their existing to-dos.
- Users can mark a to-do as completed.
- Users can delete a to-do from their list.

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **Mongoose**: ODM for MongoDB, used to interact with the database.
- **Zod**: Schema validation library for validating request payloads.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool that provides a faster development environment.
- **ESLint**: Tool for identifying and fixing problems in JavaScript code.

## Getting Started

### Prerequisites

- Node.js installed (v14 or higher recommended).
- MongoDB instance running (either locally or remotely).

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/iamnabeelrahman/UpSkillMadia-Tasks/tree/main/Task%2028
   cd Task-28
   ```

2. **Set Up Backend**:
   ```bash
   cd backend
   npm install
   ```
   
   Create a `.env` file in the root directory and add the following variables (if necessary):
   ```bash
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

   Run the backend:
   ```bash
   node index.js
   ```

3. **Set Up Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

### Running the Application

- The backend will be available at `http://localhost:3000`.
- The frontend will be available at `http://localhost:5173`.

Deployed Application
You can access the deployed application at: https://todo-frontend-ek0e.onrender.com

## Challenges Faced

**Input Validation**: One of the major challenges was ensuring the integrity of the data being sent to the API. I used the Zod library to validate the request payloads, which helped catch invalid data early and provide meaningful error messages.

