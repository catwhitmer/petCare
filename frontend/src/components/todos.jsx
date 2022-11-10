import { Card } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos, updateTodo, deleteTodo } from '../features/todos/todoSlice'

const Todos = ({ currentPet }) => {

  const dispatch = useDispatch()

  const todoData = useSelector(state => state.todos.todos)
  const todos = todoData.filter((todo) => todo.petID === currentPet[0]._id)

  useEffect(() => {
    dispatch(getTodos())
  }, [todos])

  const handleTodoDelete = (todo) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      dispatch(deleteTodo(`${todo._id}`))
    }
  }

  const handleTodoUpdate = (todo) => {
    // dispatch(updateTodo(`${todo._id}`))
  }

  return (
    <Card className='card'>
      <h2>To-Dos</h2>
        {todos.map((todo) => ( 
          <div className="todo" key={todo._id}>  
            <DeleteForeverIcon className="todo-icon" onClick={() => handleTodoDelete(todo)} style={{width: '18px'}}/>
            <AutoFixHighIcon className="todo-icon" onClick={() => handleTodoUpdate(todo)} style={{width: '18px'}}/>
            <p >{todo.description} - {todo.notes}</p>
          </div>
        ))}
    </Card>
  )
}

export default Todos