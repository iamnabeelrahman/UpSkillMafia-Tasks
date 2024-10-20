import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.msg); 
        navigate("/login")// elert for registring
      } else {
        const erorData = await response.json();
        alert(erorData.error);
      }
    } catch (error) {
      alert("An unexpected error occures. Please try again!");
    }
  }

  return (
    <div>
      <h1> Register Please </h1>
      <div>
        <form onSubmit={handleSubmit}>
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
          <input type="submit" value="Register" />
        </form>
      </div>

      <h5>
        already have an account? <Link to="/Login">Login</Link>
      </h5>
    </div>
  );
}

export default Register;
