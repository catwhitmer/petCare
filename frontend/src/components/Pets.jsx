import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPets, reset } from '../features/pets/petSlice'
import Pet from './Pet'

const Pets = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const pets = useSelector(state => state.pets.petSlice.pets)
  const isLoading = useSelector(state => state.pets.petSlice.isLoading)

  useEffect (() => {
    if (isLoading === false) {
      //dispatch(getPets())
    console.log(pets)
    console.log(isLoading)
    }
  }, [isLoading])
  
	return (
    <div className='pet-wrapper'>
			Pets
			<Pet/>
    </div>
  )
}

export default Pets