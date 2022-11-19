import { configureStore } from "@reduxjs/toolkit";
import petReducer from "../features/pets/petSlice";
import todoReducer from "../features/todos/todoSlice";

export const store = configureStore({
  reducer: {
    pets: petReducer,
    todos: todoReducer,
  },
});
