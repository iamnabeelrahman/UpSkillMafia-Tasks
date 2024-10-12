# Video Streaming Application

This project is an integrated video streaming application that consists of a backend built with **Node.js** and **Express** and a frontend developed using **React**. Users can select and play videos streamed from the backend server.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Challenges Faced](#challenges-faced)

## Setup Instructions

Follow these steps to set up and run the application locally:

### Backend Setup

1. **Clone the Backend Repository:**
   ```bash
   git clone https://github.com/iamnabeelrahman/UpSkillMadia-Tasks.git
   cd Task\ 29/backend
2. Install Dependencies:
   ```bash
   npm install
3. Run the Backend Server:
   ```bash
   node index.js

### Frontend Setup

1. Clone the Frontend Repository: Navigate to the frontend directory:
   ```bash
    cd ../frontend
    git clone https://github.com/your-frontend-repo.git
2. Install Dependencies:
   ```bash
    npm install
3. Run the Frontend Application:
   ```bash
    npm start
4. Access the Application: Open your browser and go to http://localhost:3000 to use the application.


### Challenges Faced
During the integration of the backend and frontend, I encountered the following challenges:

1. CORS Issues:
   -Initially, I faced issues with Cross-Origin Resource Sharing (CORS) when the frontend tried to access the backend. To address this, I configured CORS in the backend by installing the cors package and using it in my Express app:
2. File Path Management:
   -Ensuring the correct file paths for video files was challenging. I had to carefully structure my project folders and update the videoFileMap accordingly.

