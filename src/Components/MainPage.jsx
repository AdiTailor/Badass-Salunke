import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./fonts.css";
import googlelogo from "./google-logo.png"; // Ensure correct path

const MainPage = () => {
  const navigate = useNavigate();

  // Function to handle Google login
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5173/auth/google";
  };

  // Extract JWT from URL after OAuth callback
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/RoadRunner_fanart.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(100%)",
          zIndex: 0
        }}
      />

      {/* Dark Overlay */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1
        }}
      ></div>

      {/* Main Content */}
      <div 
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "white",
          textAlign: "center",
          zIndex: 2
        }}
      >
        <h1 className="looney-title">WELCOME TO ROAD-RUNNERS!</h1>

        {/* Buttons Container */}
        <div style={{ display: "flex", gap: "20px", marginTop: "1.5rem" }}>
          {/* Google Login Button */}
          <button 
            onClick={handleGoogleLogin}
            style={{
              width: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #ccc",
              padding: "12px",
              borderRadius: "8px",
              color: "white",
              backgroundColor: "#4B5563",
              cursor: "pointer",
            }}
          >
            <img src={googlelogo} alt="Google" style={{ width: "20px", height: "20px", marginRight: "8px" }} />
            Login with Google
          </button>

          {/* About Button */}
          <Link to="/about">
            <button 
              style={{
                width: "200px",
                padding: "12px",
                backgroundColor: "#4B5563",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              About
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div 
        style={{
          position: "absolute",
          bottom: "-30px", 
          left: "1rem",
          color: "black",
          fontSize: "2rem",
          zIndex: 2
        }}
      >
        <p>An initiative by students of BITS GOA</p>
      </div>

      {/* Catchphrase */}
      <div className="pokemon" style={{ position: "absolute", bottom: "1rem", right: "1rem", zIndex: 2 }}>
        <p>GOTTA CATCH 'EM ALL ...</p>
      </div>
    </div>
  );
};

export default MainPage;
