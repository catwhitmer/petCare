import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPets, reset } from '../features/pets/petSlice'

const Pets = () => {

  const dispatch = useDispatch()

  const petData = useSelector(state => state.pets)

  useEffect(() => {
    dispatch(getPets())
  }, [])
  
  
	return (
    <div className='pet-wrapper'>
      <h1>My Pets</h1>
      {petData.pets.map((pet) => (
        <h3>{pet.name}</h3>
      ))}
    </div>
  )
}

export default Pets