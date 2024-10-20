import React, { useEffect, useState } from 'react';

function UserDetails() {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken"); // Get the token from local storage
    if (!token) {
      setError("You must be logged in to submit details."); // Set error if no token
      return; // Stop execution if no token
    }

    const fetchUserDetails = async () => {
      try {
        const response = await fetch("https://task32-backend.onrender.com/read", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, // Use the token
          },
        });

        // Check if the response is okay
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }

        const data = await response.json();
        console.log(data); // Log the response data to check structure
        setUserDetails(data.userDetails); // Update state with user details
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
      {userDetails ? ( // Check if userDetails is not null
        <ul>
          <li key={userDetails._id}>
            <p>Name: {userDetails.name}</p>
            <p>Email: {userDetails.email}</p>
            <p>Age: {userDetails.age}</p>
            <p>Instagram Username: {userDetails.instaUsername}</p>
          </li>
        </ul>
      ) : (
        <p>Loading...</p> // Display loading while waiting for data
      )}
    </div>
  );
}

export default UserDetails;
