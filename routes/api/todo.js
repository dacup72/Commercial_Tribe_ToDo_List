import express from 'express';
// Methods from todoController
import { findAll, createItem, deleteItem, updateItem } from '../../controllers/todoController';

const router = express.Router();

// Matches with "/api/todo"
router.route('/')
  .get(findAll)
  .post(createItem)
  .delete(deleteItem)
  .put(updateItem);

export default router;