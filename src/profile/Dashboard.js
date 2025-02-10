import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // Redirect to SignIn if user is not logged in
  useEffect(() => {
    if (!user) {
      navigate("/signin"); 
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    navigate("/signin");
  };

  return (
    <div className="container mt-5">
      <h2>Welcome, {user?.name}!</h2>
      <p>Email: {user?.email}</p>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
