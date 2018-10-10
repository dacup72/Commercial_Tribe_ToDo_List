const express =require('express');
// Methods from todoController
const { findAll, createItem, deleteItem, updateItem } =require('../../controllers/todoController');

const router = express.Router();

// Matches with "/api/todo"
router.route('/')
  .get(findAll)
  .post(createItem);

// Matches with "/api/todo/:id"
router.route('/:id')
  .delete(deleteItem)
  .put(updateItem);

module.exports = router;