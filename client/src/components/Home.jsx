import React from "react";
import { useNavigate } from "react-router-dom";

function Home({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Reset authentication state
    navigate("/login"); // Redirect to login page
  }

  return (
    <center>
      <h1>This is Home Component</h1>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>
    </center>
  );
}

export default Home;
