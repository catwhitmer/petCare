import { Link } from 'react-router-dom'

function NavBar () {
  return (
      <div className='nav-bar'>
        <div className='nav-links'>
          <Link to='/'>Home</Link> - <Link to='/pets'>All Pets</Link> - <Link to='/pets/new'>Add Pet</Link>
        </div>
        <div className='nav-images'>
          <img src="Pet1.jpg" className='img' alt='dog'></img>
          <img src="Pet3.jpg" className='img' alt='pets'></img>
          <img src="Pet6.jpg" className='img' alt='snake'></img>
          <img src="Pet7.jpg" className='img' alt='hamster'></img>
        </div>
    </div>
  )
}

export default NavBar