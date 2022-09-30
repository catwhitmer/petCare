function PetForm () {


	const handleOnSubmit  = () => {

	}

	const handleOnChange = () => {

	}

	return (
		<form className='pet-wrapper' onSubmit={handleOnSubmit()}>
      <h1>Add A New Pet</h1>
        <input type='text' name='name' value={''} placeholder= 'Name' onChange={handleOnChange()}/><br></br>
        <input type='text' name='species' value={''} placeholder= 'Species' onChange={handleOnChange()} /><br></br>
        <input type='text' name='breed' value={''} placeholder='Breed' onChange={handleOnChange()} /><br></br>
        <input type='text' name='age' value={''} placeholder= 'Age' onChange={handleOnChange()} /><br></br>
        
        <button type='submit'>Submit</button>
    </form>
  )
}

export default PetForm
