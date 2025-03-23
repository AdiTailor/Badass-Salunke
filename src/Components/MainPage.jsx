import React from "react";
import { Link } from "react-router-dom";
import "./fonts.css";
import googlelogo from "./google-logo.png"; // Use correct path

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
        <div>
        <button style={{ width: "80%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ccc", padding: "12px", borderRadius: "8px", color: "white", marginBottom: "12px", backgroundColor: "#4B5563" }}>
                 <img src={googlelogo} alt="Google" style={{ width: "12px", height: "12px", marginRight: "8px" }} />
                 Login with Google
               </button>
               </div>
        {/* Buttons Section */}
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Link to="/about">
            <button style={{ position: "absolute", top : "200 px" , left : "675px",padding: "0.5rem 1.5rem", backgroundColor: "#4B5563", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" ,width : "150px"}}>
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
