const express = require('express');
const passport = require('passport');
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth Callback Route
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    if (!req.user) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    // Generate JWT
    console.log("req.user:", req.user);
    console.log("req.user.emails:", req.user?.emails);
    const token = jwt.sign({ email: req.user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.redirect(`http://localhost:5174/dashboard?token=${token}`);
  }
);

// Logout Route
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.json({ message: "Logged out successfully" });
  });
});

// Protected Route Example
router.get("/protected", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ message: "You have access to protected data" });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

module.exports = router;
