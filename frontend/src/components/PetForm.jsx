import { useState } from "react"

function PetForm () {

  const [formData, setFormData] = useState({
    name: '',
    species: '',
    breed: '',
    age: ''
  })

  const { name, species, breed, age } = formData


	const handleOnSubmit  = (e) => {
    e.preventDefault()
	}

	const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
	}

	return (
    <div className='pet-wrapper'>
      <form className="pet-form" onSubmit={handleOnSubmit}>
        <h1>Add A New Pet</h1>
          <input 
            type='text' 
            name='name' 
            value={'name'} 
            placeholder= 'Name' 
            onChange={handleOnChange}
          />
          <input 
            type='text' 
            name='species' 
            value={'species'} 
            placeholder= 'Species' 
            onChange={handleOnChange} 
          />
          <input 
            type='text' 
            name='breed' 
            value={'breed'} 
            placeholder='Breed' 
            onChange={handleOnChange}
          />
          <input 
            type='text' 
            name='age' 
            value={'age'} 
            placeholder= 'Age' 
            onChange={handleOnChange} 
          />
          <button type='submit'>Submit</button>
      </form>
    </div>
		
  )
}

export default PetForm
