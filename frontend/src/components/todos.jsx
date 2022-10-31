import { Card } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTodos } from '../features/todos/todoSlice'

const Todos = () => {

  const dispatch = useDispatch()
  const params = useParams()


  useEffect(() => {
    dispatch(getTodos(params))
  }, [])

  return (
    <Card className='card'>
      <h2>To-Dos</h2>
        <div className="todo">
          <li>Feed</li>
          {/* {todoData.map((todo) => ( 
            <>    
              <li key={todo._id}>{todo.description}</li>
              <li style={{float: 'left'}}>{todo.notes}</li>
              <DeleteForeverIcon className="todo-icon" style={{width: '18px'}}/>
              <AutoFixHighIcon className="todo-icon"style={{width: '18px'}}/>
            </>
          ))} */}
        </div>
    </Card>
  )
}

export default Todos