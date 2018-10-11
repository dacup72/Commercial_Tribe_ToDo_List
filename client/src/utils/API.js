import axios from 'axios';

export default {
  getTodos: () => axios.get("/api/todo"),
  createTodo: data => axios.post("/api/todo", data),
  deleteTodo: id => axios.delete(`/api/todo/${id}`),
  updateTodo: (id, checked) => axios.put(`/api/todo/${id}`, checked)
};