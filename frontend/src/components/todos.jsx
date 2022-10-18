import { Card } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Todos = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    //dispatch()
  }, [])

  const handleTodoDelete = () => {
    console.log('hello')
  }

  return (
    <Card className='card'>
      <DeleteForeverIcon className='icon' onClick={handleTodoDelete} style={{float: 'right'}}/>
        <h2>To-Dos</h2>
          <div className="todo">
            <li style={{float: 'left'}}>Go for a walk</li>
            <DeleteForeverIcon className="todo-icon" style={{width: '18px'}}/>
            <AutoFixHighIcon className="todo-icon"style={{width: '18px'}}/>
          </div>
    </Card>
  )
}

export default Todos