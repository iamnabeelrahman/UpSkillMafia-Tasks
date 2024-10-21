import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("https://task32-backend.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        // Store the token in local storage
        localStorage.setItem("jwtToken", token);
        console.log("Login successful, token stored:", token);
        alert("Login succesfull now you can see protected routs");
        navigate("/save");

      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      alert("Unexpected error occured, Please try again!");
    }
  }
  return (
    <div>
      <h1> Login here</h1>
      <div>
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            placeholder="enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />{" "}
          <br />
          <input
            type="text"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>

      <h5>
        Don't have an account? <Link to="/Register">Login</Link>   
      </h5>
    </div>
  );
}

export default Login;
