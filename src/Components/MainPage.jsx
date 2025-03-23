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
        <button style={{ width: "80%", display: "flex", alignItems: "center", justifyContent: "center", border: "0.14vh solid #ccc", padding: "1.72vh", borderRadius: "1.15vh", color: "white", marginBottom: "1.72vh", backgroundColor: "#4B5563" }}>
                 <img src={googlelogo} alt="Google" style={{ width: "2.30vh", height: "2.30vh", marginRight: "1.15vh" }} />
                 Login with Google
               </button>
               </div>
        {/* Buttons Section */}
        <div style={{ display: "flex", gap: "2.30vh", marginTop: "2.30vh" }}>
          <Link to="/about">
            <button style={{ position: "relative", top : "40%" , left : "-12%",padding: "1.15vh 3.45vh", backgroundColor: "#4B5563", color: "white", border: "none", borderRadius: "0.72vh", cursor: "pointer" ,width : "9.5vw"}}>
              About
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div 
  style={{
    position: "absolute",
    bottom: "-4.31vh",  // Move it further down
    left: "2.3vh",
    color: "black",
    fontSize: "4.6vh",
    zIndex: 2
  }}
>
  <p>An initiative by students of BITS GOA</p>
</div>


      <div className="pokemon" style={{ position: "absolute", bottom: "2.3vh", right: "2.3vh", zIndex: 2 }}>
  <p>GOTTA CATCH 'EM ALL ...</p>
</div>

    </div>
  );
};

export default MainPage;
