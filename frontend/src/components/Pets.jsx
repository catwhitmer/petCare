import { useState } from 'react'
import { Link } from 'react-router-dom'
import Pet from './Pet'

const Pets = (props) => {
	return (
    <div className='pet-wrapper'>
			Pets
			<Pet/>
    </div>
  )
}

export default Pets