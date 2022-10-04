import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPets, reset } from '../features/pets/petSlice'
import Pet from './Pet'

const Pets = () => {

  const dispatch = useDispatch()

  // const pets = useSelector(state => state.petSlice.pets)
  // const isLoading = useSelector(state => state.petSlice.isLoading)

  // useEffect(() => {
  //   dispatch(getPets())
  // }, [])
  
  
	return (
    <div className='pet-wrapper'>
			<Pet/>
    </div>
  )
}

export default Pets