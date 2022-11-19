import axios from "axios";

const API_URL = "/api/todos/";

// Get todos
const getTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create Todo
const createTodo = async (todoData) => {
  const response = await axios.post(API_URL, todoData);
  return response.data;
};

// Update todo
const updateTodo = async (todoId, todoData) => {
  const response = await axios.put(API_URL, todoId, todoData);
  return response.data;
};

// Delete todo
const deleteTodo = async (todoId) => {
  const response = await axios.delete(API_URL + todoId);
  return response.data;
};

const todoService = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};

export default todoService;
