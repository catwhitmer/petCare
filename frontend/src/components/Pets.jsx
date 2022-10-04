import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPets } from '../features/pets/petSlice'

const Pets = () => {

  const dispatch = useDispatch()

  const petData = useSelector(state => state.pets.pets)

  useEffect(() => {
    dispatch(getPets())
  }, [])
  
  
	return (
    <div className='pet-wrapper'>
      <h1>My Pets</h1>
      {petData.map((pet) => (
        <h3>{pet.name}</h3>
      ))}
    </div>
  )
}

export default Pets