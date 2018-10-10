const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toDoItem = new Schema({
  text: {
    type: String,
    required: [true, "Text is required"]
  },
  checked: {
    type: Boolean,
    default: false
  }
});

const ToDoItem = mongoose.model("ToDoItem", toDoItem);

module.exports = ToDoItem;