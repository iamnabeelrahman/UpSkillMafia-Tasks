import React, { useState, useEffect } from "react";

function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [instaUsername, setInstaUsername] = useState("");
  const [error, setError] = useState(null); // State for error message
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check if user is logged in

  useEffect(() => {
    const token = localStorage.getItem("jwtToken"); // Get the token from local storage
    if (!token) {
      setError("You must be logged in to submit details."); // Set error if no token
    } else {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  async function submitHandler(e) {
    e.preventDefault();
    if (!name || !email || !age) {
      alert("Please fill in all fields.");
      return;
    }

    const token = localStorage.getItem("jwtToken"); // Get the token from local storage
    if (!token) {
      setError("You must be logged in to submit details."); // Set error if no token
      alert("You must be logged in to submit details.")
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Include the token
        },
        body: JSON.stringify({ name, email, age: Number(age), instaUsername }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.msg);
        setError(null); // Clear error if submission is successful
      } else {
        const data = await response.json();
        alert(data.error, data.details || "An error occurred.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting your details.");
    }
  }

  // If not logged in, do not render the form
  if (!isLoggedIn) {
     <p style={{ color: 'red' }}>{error}</p>; // Display error message in red
    return alert("You must be logged in to submit details.")
  }

  return (
    <div>
      <h2>Enter your details</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Insta username"
          value={instaUsername}
          onChange={(e) => setInstaUsername(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default UserProfile;
