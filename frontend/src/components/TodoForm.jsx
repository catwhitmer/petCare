import { useState } from "react"
import { useDispatch } from 'react-redux'
import { createTodo } from '../features/todos/todoSlice'

function TodoForm ({ currentPet }) {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    description: '',
    notes: '',
    petID: currentPet[0]._id
  })

  const { description, notes } = formData


	const handleOnSubmit  = (e) => {
    e.preventDefault()

    dispatch(createTodo({ formData }))

    setFormData({
      description: '',
      notes: '',
    })
	}

	const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
	}

	return (
    <form className="todo-form" onSubmit={handleOnSubmit}>
      <h1>Add A New To-Do</h1>
        <input 
          type='text' 
          name='description' 
          value={description} 
          placeholder= 'Description' 
          onChange={handleOnChange}
        />
        <input 
          type='text' 
          name='notes' 
          value={notes} 
          placeholder= 'Notes' 
          onChange={handleOnChange} 
        />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default TodoForm