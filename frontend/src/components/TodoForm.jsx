import { useState } from "react"
import { useDispatch } from 'react-redux'

function TodoForm () {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    description: '',
    notes: '',
  })

  const { description, notes } = formData


	const handleOnSubmit  = (e) => {
    e.preventDefault()

    //dispatch(createTodo( { formData }))

    setFormData({
      description: '',
      notes: '',
    })
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
        <h1>Add A New Todo</h1>
          <input 
            type='text' 
            name='description' 
            value={description} 
            placeholder= 'Description' 
            onChange={handleOnChange}
          />
          <input 
            type='text' 
            name='notes' 
            value={notes} 
            placeholder= 'Notes' 
            onChange={handleOnChange} 
          />
          <button type='submit'>Submit</button>
      </form>
    </div>
		
  )
}

export default TodoForm