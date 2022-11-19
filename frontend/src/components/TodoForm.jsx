import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createTodo } from "../features/todos/todoSlice";

function TodoForm({ currentPet }) {
  const dispatch = useDispatch();
  const params = useParams();

  const [formData, setFormData] = useState({
    description: "",
    notes: "",
    petID: currentPet[0]._id,
  });

  const { description, notes } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTodo({ formData }));

    setFormData({
      description: "",
      notes: "",
    });
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <h1>Add A New To-Do</h1>
      <input
        type="text"
        name="description"
        value={description}
        placeholder="Description"
        onChange={handleChange}
      />
      <input
        type="text"
        name="notes"
        value={notes}
        placeholder="Notes"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
