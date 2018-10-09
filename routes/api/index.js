import express from 'express';
import todoRoutes from './todo';

const router = express.Router();

// Todo routes
router.use("/todo", todoRoutes);

export default router;