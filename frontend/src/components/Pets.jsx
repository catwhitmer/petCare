import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPets } from '../features/pets/petSlice'
import { Link } from 'react-router-dom'

const Pets = () => {

  const dispatch = useDispatch()

  const petData = useSelector(state => state.pets.pets)

  useEffect(() => {
    dispatch(getPets())
  }, [])
  
	return (
    <div className='pet-wrapper'>
      <h1>My Pets</h1>
      <div className='pets'>
        {petData.map((pet) => (
          <h2 key={pet._id}>
            <Link to={`/pets/${pet._id}`}>{pet.name}</Link>
          </h2> 
        ))}
      </div>
    </div>
  )
}

export default Pets