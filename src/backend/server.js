require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

// Load Passport configuration
require("./config/passport");

// Import authentication routes
const authRoutes = require("./routes/auth");
const uploadRoutes = require("./routes/upload");
const app = express();

// CORS Middleware (Allows frontend requests)
app.use(cors({ origin: "http://localhost:5174", credentials: true }));

// Session Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
app.use("/uploads", express.static("uploads"));

// Use Auth Routes (THIS IS IMPORTANT)
app.use("/auth", authRoutes);
app.use("/uploads", uploadRoutes);
const connectDB = require("./config/db");
connectDB();
// Start Server
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
