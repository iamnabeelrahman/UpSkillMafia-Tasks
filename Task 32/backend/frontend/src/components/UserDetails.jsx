import React, { useEffect, useState } from 'react';

function UserDetails() {
  const [userDetails, setUserDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch("http://localhost:3000/read", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`, // Include the token
          },
        });

        const token = localStorage.getItem("jwtToken"); // Get the token from local storage
        if (!token) {
          setError("You must be logged in to submit details."); // Set error if no token
          return;
        }
        
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        const data = await response.json();
        setUserDetails(data.UserDetails); // Storing the retrieved data in state
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Failed to load user details");
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div>
      <h2>User Details</h2>
      {error && <p>{error} please login first</p>}
      <ul>
        {userDetails.map((detail) => (
          <li key={detail._id}>
            <p>Name: {detail.name}</p>
            <p>Email: {detail.email}</p>
            <p>Age: {detail.age}</p>
            <p>Instagram Username: {detail.instaUsername}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserDetails;
