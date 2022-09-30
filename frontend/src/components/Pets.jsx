import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getPets, reset } from '../features/pets/petSlice'
import Pet from './Pet'

const Pets = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

	return (
    <div className='pet-wrapper'>
			Pets
			<Pet/>
    </div>
  )
}

export default Pets