import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function AboutPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h2>About Our Company</h2>
      <p>We are a tech-driven organization empowering innovation through intelligent solutions.</p>
      <button onClick={() => { logout(); navigate("/"); }}>Logout</button>
    </div>
  );
}

export default AboutPage;
