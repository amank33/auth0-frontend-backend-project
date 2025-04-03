const express = require("express");
const router = express.Router();
const { handleAuthCallback } = require("../controllers/AuthController");

const {verifyToken} = require("../middleware/authMiddleware");


router.post("/api/auth/callback", verifyToken, handleAuthCallback);

module.exports = router;
