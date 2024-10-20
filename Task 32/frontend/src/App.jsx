import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import UserDetails from "./components/UserDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/save" element={<UserProfile/>} />
          <Route path="/read" element={<UserDetails/>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
