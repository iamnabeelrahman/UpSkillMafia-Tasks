# Cookie and Response Code Handler

## Overview
This project is a simple Vite React application that demonstrates cookie handling and HTTP response codes with an Express backend. It allows users to set and retrieve cookies, as well as test various HTTP response codes.

## Features
- Set a cookie in the browser.
- Retrieve the cookie from the server.
- Test different HTTP response codes: 200, 201, 400, 404, and 500.

## Technologies Used
- React
- Vite
- Express (for the backend, not included in this repo)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

### API Endpoints
Ensure that your backend is running and accessible. The frontend interacts with the following API endpoints:

- **Set Cookie**: `GET https://task33-backend.onrender.com/set-cookie`
- **Get Cookie**: `GET https://task33-backend.onrender.com/get-cookie`
- **200 Success**: `GET https://task33-backend.onrender.com/success`
- **201 Created**: `POST https://task33-backend.onrender.com/created`
- **400 Bad Request**: `GET https://task33-backend.onrender.com/bad-request`
- **404 Not Found**: `GET https://task33-backend.onrender.com/not-found`
- **500 Server Error**: `GET https://task33-backend.onrender.com/server-error`

### Usage
- Click the buttons to perform actions:
  - **Set Cookie**: Sets a cookie named `username`.
  - **Get Cookie**: Retrieves the value of the `username` cookie.
  - **200 Success**: Tests a successful response.
  - **201 Created**: Tests resource creation.
  - **400 Bad Request**: Tests handling of bad requests.
  - **404 Not Found**: Tests resource not found error.
  - **500 Server Error**: Tests internal server error handling.



## Live Links
- **Frontend**: [https://upskillmadia-tasks-rix5.onrender.com](https://upskillmadia-tasks-rix5.onrender.com)
- **Backend**: [https://task33-backend.onrender.com](https://task33-backend.onrender.com)
- **Backend Repository**: [GitHub Repo](https://github.com/iamnabeelrahman/UpSkillMadia-Tasks/tree/main/task%2033/backend)

