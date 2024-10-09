# UpSkillMafia Task 28


This is a simple backend for a To-Do List application built with Node.js and Express. The application allows users to create, read, update, and delete to-do items.

The backend has followinf features-
- Anyone can create todo
- Anyone can see their existing todo
- Anyone can mark a todo as done
- Anyone can delete a todo from their existing todos
  

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **Mongoose**: ODM for MongoDB, used to interact with the database.
- **Zod**: Schema validation library for validating request payloads.

## Getting Started

### Prerequisites

- Node.js installed (v14 or higher recommended).
- MongoDB instance running (either locally or remotely).

### Installation

1. **Clone the Repository**:
   ```bash
   git https://github.com/iamnabeelrahman/UpSkillMadia-Tasks/tree/main/Task%2028
   cd backend

2. Install Dependencies:
   ```bash
   npm install

3. Set Up Environment Variables: Create a .env file in the root directory and add the following variables (if necessary):
  ```bash
  MONGODB_URI=your_mongodb_connection_string
  PORT=3000
```

4. Run the Application:
   ``` bash
   node index.js
   ```

   ## Challenges Faced

1. **Input Validation**: One of the major challenges was ensuring the integrity of the data being sent to the API. I used the Zod library to validate the request payloads, which helped catch invalid data early and provide meaningful error messages.













