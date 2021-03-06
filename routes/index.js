const path =require('path');
const express =require('express');
const apiRoutes =require('./api');

const router = express.Router();

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

module.exports = router;