import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Pet = () => {

  const location = useLocation()

  const petData = useSelector(state => state.pets.pets)

  const petID = location.pathname.replace('/pets/', '')
  const currentPet = petData.filter((pet) => pet._id === petID)
  
  return (
    <div className='pet-wrapper'>
      <h1>{currentPet[0].name}</h1>
      <div className='pet'>
        <h3 style={{textAlign: 'left'}}>{currentPet[0].species}</h3>
        <h3 style={{textAlign: 'left'}}>{currentPet[0].breed}</h3>
        <h3 style={{textAlign: 'left'}}>{currentPet[0].age}</h3>
      </div>
    </div>
  )
}

export default Pet