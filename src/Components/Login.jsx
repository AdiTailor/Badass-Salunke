import React, { useState } from "react";
import wileECoyote from "./Sign_in.jpg";  // Ensure correct relative path & file name
import googlelogo from "./google-logo.png";
import facebooklogo from "./facebook-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle manual login
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5173/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        window.location.href = "/dashboard"; // Redirect after login
      } else {
        alert(data.msg || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", backgroundColor: "#f3f4f6", overflow: "hidden" }}>
      {/* Left Side Image */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#3b82f6" }}>
        <img src={wileECoyote} alt="Road Runner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* Right Side Form */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: "40px",
        boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.5)",
        height: "100vh",
        zIndex: 2,
        position: "relative",
        willChange: "transform",
        isolation: "isolate",
        colorScheme: "normal",
        WebkitForcedColorAdjust: "none"
      }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#dc2626", marginBottom: "24px" }}>ROAD-RUNNERS</h1>

        {/* Google Login */}
        <button
          onClick={() => window.open("http://localhost:5173/auth/google", "_self")}
          style={{
            width: "80%", display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid #ccc", padding: "12px", borderRadius: "8px",
            color: "#4b5563", marginBottom: "12px", backgroundColor: "white"
          }}
        >
          <img src={googlelogo} alt="Google" style={{ width: "16px", height: "16px", marginRight: "8px" }} />
          Login with Google
        </button>

        {/* Facebook Login - Placeholder (Optional) */}
        <button style={{
          width: "80%", display: "flex", alignItems: "center", justifyContent: "center",
          border: "1px solid #ccc", padding: "12px", borderRadius: "8px",
          color: "#4b5563", backgroundColor: "white"
        }}>
          <img src={facebooklogo} alt="Facebook" style={{ width: "16px", height: "16px", marginRight: "8px" }} />
          Login with Facebook
        </button>

        <div style={{ display: "flex", alignItems: "center", margin: "16px 0", width: "80%" }}>
          <hr style={{ flexGrow: 1, border: "1px solid #d1d5db" }} />
          <span style={{ margin: "0 16px", color: "#6b7280" }}>OR</span>
          <hr style={{ flexGrow: 1, border: "1px solid #d1d5db" }} />
        </div>

        {/* Email Input */}
        <div style={{ width: "80%" }}>
          <label style={{ color: "#4b5563" }}>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", border: "1px solid #ccc", padding: "12px", borderRadius: "8px", marginTop: "8px" }}
          />
        </div>

        {/* Password Input */}
        <div style={{ width: "80%", marginTop: "16px" }}>
          <label style={{ color: "#4b5563" }}>Password</label>
          <input
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", border: "1px solid #ccc", padding: "12px", borderRadius: "8px", marginTop: "8px" }}
          />
        </div>

        {/* Manual Login Button */}
        <button
          onClick={handleLogin}
          style={{
            width: "80%", backgroundColor: "#4f46e5", color: "white",
            padding: "12px", borderRadius: "8px", marginTop: "24px", fontWeight: "bold"
          }}
        >
          Login
        </button>

        <p style={{ marginTop: "16px", color: "#6b7280" }}>
          Don't have an account? <a href="/signup" style={{ color: "#3b82f6" }}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
