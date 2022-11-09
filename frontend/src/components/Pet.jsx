import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deletePet } from '../features/pets/petSlice';
import Todos from './Todos';

const Pet = () => {

  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const petData = useSelector(state => state.pets.pets)

  const petID = location.pathname.replace('/pets/', '')
  const currentPet = petData.filter((pet) => pet._id === petID)

  const handlePetDelete = () => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      if (currentPet[0]._id === petID) {
        dispatch(deletePet(petID))
        navigate('/pets')
      }
    }
  }

  return (
    <div className='pet-wrapper'>    
        <Card className='card'>
          <DeleteForeverIcon className='icon' onClick={handlePetDelete} style={{float: 'right'}}/>
          <h1>{currentPet[0].name}</h1> 
          <div style={{textAlign: 'left'}}>
            <h3>{currentPet[0].species}</h3>
            <h3>{currentPet[0].breed}</h3>
            <h3>{currentPet[0].age}</h3>
          </div>
        </Card>
        <Todos currentPet={currentPet}/>
    </div>
  )
}

export default Pet