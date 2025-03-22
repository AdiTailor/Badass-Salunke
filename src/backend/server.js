require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");

const app = express();

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

// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      const email = profile.emails[0].value;
      const allowedDomain = process.env.ALLOWED_DOMAIN;

      // Check if the email ends with the allowed domain
      if (email.endsWith(`@${allowedDomain}`)) {
        return done(null, profile);
      } else {
        return done(null, false, { message: "Unauthorized email domain" });
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Google Login Route
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth Callback Route
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    // Generate JWT after successful authentication
    const token = jwt.sign({ email: req.user.emails[0].value }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  }
);

// Logout Route
app.get("/logout", (req, res) => {
  req.logout(() => {});
  res.json({ message: "Logged out successfully" });
});

// Protected Route Example
app.get("/protected", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ message: "You have access to protected data" });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.listen(5173, () => console.log("Server running on http://localhost:5173"));
