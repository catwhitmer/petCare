import { Card } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, deleteTodo } from "../features/todos/todoSlice";

const Todos = ({ currentPet }) => {
  const dispatch = useDispatch();

  const todoData = useSelector((state) => state.todos.todos);
  const todos = todoData.filter((todo) => todo.petID === currentPet[0]._id);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const handleDelete = (todo) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      dispatch(deleteTodo(`${todo._id}`));
    }
  };

  return (
    <Card className="card">
      <h2>To-Dos</h2>
      {todos.map((todo) => (
        <div className="todo" key={todo._id}>
          <DeleteForeverIcon
            className="todo-icon"
            onClick={() => handleDelete(todo)}
            style={{ width: "18px" }}
          />
          <p>
            {todo.description} - {todo.notes}
          </p>
        </div>
      ))}
    </Card>
  );
};

export default Todos;
