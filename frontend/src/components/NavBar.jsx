import { Link } from 'react-router-dom'
import Header from './Header'

function NavBar (props) {
  return (
      <div className='NavBar'>
      <Link to='/'>Home</Link> - <Link to='/pets'>All Pets</Link> - <Link to='/pets/new'>Add Pet</Link>
        <div style={{display: 'flex', float: 'right'}}>
          <Header/>
        </div>
    </div>
  )
}

export default NavBar