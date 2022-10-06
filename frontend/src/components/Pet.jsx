import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Pet = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const petData = useSelector(state => state.pets.pets)

  const petID = location.pathname.replace('/pets/', '')
  const currentPet = petData.filter((pet) => pet._id === petID)

  return (
    <div className='pet-wrapper'>    
        <Card className='pet'>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <h1>{currentPet[0].name}</h1>
            <AutoFixHighIcon className='icon' style={{paddingLeft: '40px'}} />
            <DeleteForeverIcon className='icon' />
          </div>
          <div style={{textAlign: 'left'}}>
            <h3>{currentPet[0].species}</h3>
            <h3>{currentPet[0].breed}</h3>
            <h3>{currentPet[0].age}</h3>
          </div>
        </Card>
    </div>
  )
}

export default Pet