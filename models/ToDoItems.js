import mongoose from "mongoose";
const Schema = mongoose.Schema;

const toDoItem = new Schema({
  id: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: [true, "Text is required"]
  },
  checked: {
    type: Boolean,
    required: true
  }
});

const ToDoItem = mongoose.model("ToDoItem", toDoItem);

export default ToDoItem;