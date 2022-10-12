import { Card } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Todos = () => {

  const handleTodoDelete = () => {
    console.log('hello')
  }

  return (
    <div>    
      <Card className='card'>
        <DeleteForeverIcon className='icon' onClick={handleTodoDelete} style={{float: 'right'}}/>
        <h2>To-Dos</h2>
          <li style={{textAlign: 'left'}}>Go for a walk</li>
      </Card>
    </div>
  )
}

export default Todos