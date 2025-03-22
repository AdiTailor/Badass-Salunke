import React from "react";
import { Link } from "react-router-dom";
import "./fonts.css";

const MainPage = () => {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Background Image Wrapper */}
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

      {/* Dark Overlay for Contrast */}
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


        {/* Buttons Section */}
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Link to="/login">
            <button style={{ padding: "0.5rem 1.5rem", backgroundColor: "#1E40AF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button style={{ padding: "0.5rem 1.5rem", backgroundColor: "#15803D", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Sign Up
            </button>
          </Link>
          <Link to="/about">
            <button style={{ padding: "0.5rem 1.5rem", backgroundColor: "#4B5563", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              About
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div 
  style={{
    position: "absolute",
    bottom: "-30px",  // Move it further down
    left: "1rem",
    color: "black",
    fontSize: "2rem",
    zIndex: 2
  }}
>
  <p>An initiative by students of BITS GOA</p>
</div>


      <div className="pokemon" style={{ position: "absolute", bottom: "1rem", right: "1rem", zIndex: 2 }}>
  <p>GOTTA CATCH 'EM ALL ...</p>
</div>

    </div>
  );
};

export default MainPage;
