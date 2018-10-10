const express =require('express');
// Methods from todoController
const { findAll, createItem, deleteItem, updateItem } =require('../../controllers/todoController');

const router = express.Router();

// Matches with "/api/todo"
router.route('/')
  .get(findAll)
  .post(createItem)
  .delete(deleteItem)
  .put(updateItem);

module.exports = router;