import React from "react";
import wileECoyote from "./Sign_up.webp";  // Ensure correct relative path & file name
import googlelogo from "./google-logo.png";
import facebooklogo from "./facebook-logo.png";

const SignUp = () => {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", backgroundColor: "#f3f4f6",overflow:"hidden" }}> 
      {/* Left Side Image */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#3b82f6"}}>
        <img
          src={wileECoyote}
          alt="Road Runner"
          style={{width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Right Side Form */}
      <div style={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#ffffff", // Using hex instead of name
        padding: "40px", 
        boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.5)", // Using rgba
        height: "100vh",
        zIndex: 2, // Increased z-index
        position: "relative",
        willChange: "transform", // Force hardware acceleration
        isolation: "isolate", // Create a new stacking context
        colorScheme: "normal", // Prevent dark mode interference
        WebkitForcedColorAdjust: "none" // Prevent color adjustments in Chrome
      }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#dc2626", marginBottom: "24px" }}>ROAD-RUNNERS</h1>

        <button style={{ width: "80%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ccc", padding: "12px", borderRadius: "8px", color: "#4b5563", marginBottom: "12px", backgroundColor: "white" }}>
          <img src={googlelogo} alt="Google" style={{ width: "12px", height: "12px", marginRight: "8px" }} />
          Sign Up with Google
        </button>

        <button style={{ width: "80%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ccc", padding: "12px", borderRadius: "8px", color: "#4b5563", backgroundColor: "white" }}>
          <img src={facebooklogo} alt="Facebook" style={{ width: "12px", height: "12px", marginRight: "8px" }} />
          Sign Up with Facebook
        </button>

        <div style={{ display: "flex", alignItems: "center", margin: "16px 0", width: "80%" }}>
          <hr style={{ flexGrow: 1, border: "1px solid #d1d5db" }} />
          <span style={{ margin: "0 16px", color: "#6b7280" }}>OR</span>
          <hr style={{ flexGrow: 1, border: "1px solid #d1d5db" }} />
        </div>

        <div style={{ width: "80%" }}>
          <label style={{ color: "#4b5563" }}>Email</label>
          <input type="email" placeholder="example@gmail.com" style={{ width: "100%", border: "1px solid #ccc", padding: "12px", borderRadius: "8px", marginTop: "8px" }} />
        </div>

        <div style={{ width: "80%", marginTop: "16px" }}>
          <label style={{ color: "#4b5563" }}>Password</label>
          <input type="password" placeholder="**********" style={{ width: "100%", border: "1px solid #ccc", padding: "12px", borderRadius: "8px", marginTop: "8px" }} />
        </div>

        <div style={{ width: "80%", marginTop: "16px" }}>
          <label style={{ color: "#4b5563" }}>Confirm Password</label>
          <input type="password" placeholder="**********" style={{ width: "100%", border: "1px solid #ccc", padding: "12px", borderRadius: "8px", marginTop: "8px" }} />
        </div>

        <button style={{ width: "80%", backgroundColor: "#4f46e5", color: "white", padding: "12px", borderRadius: "8px", marginTop: "24px", fontWeight: "bold" }}>
          SIGN UP
        </button>

        <p style={{ marginTop: "16px", color: "#6b7280" }}>
          Already have an account? <a href="/login" style={{ color: "#3b82f6" }}>Log In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
