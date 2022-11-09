import { Card } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../features/todos/todoSlice'

const Todos = ({ currentPet }) => {

  const dispatch = useDispatch()

  const todoData = useSelector(state => state.todos.todos)
  const todos = todoData.filter((todo) => todo._petID === currentPet[0]._id)

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  return (
    <Card className='card'>
      <h2>To-Dos</h2>
        {todos.map((todo) => ( 
          <div className="todo">  
            <li key={todos._id}>{todo.description}</li>
            <li>{todo.notes}</li>
            <DeleteForeverIcon className="todo-icon" style={{width: '18px'}}/>
            <AutoFixHighIcon className="todo-icon"style={{width: '18px'}}/>
          </div>
        ))}
    </Card>
  )
}

export default Todos