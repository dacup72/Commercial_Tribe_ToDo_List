const express = require('express');
const todoRoutes = require('./todo');

const router = express.Router();

// Todo routes
router.use("/todo", todoRoutes);

module.exports = router;