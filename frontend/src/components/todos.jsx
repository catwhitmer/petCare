import { Card } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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
          <div>
            <li style={{textAlign: 'left'}}>Go for a walk</li>
          </div>
    </Card>
  )
}

export default Todos