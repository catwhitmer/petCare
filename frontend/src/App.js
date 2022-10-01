import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import PetsContainer from './containers/PetsContainer'
import PetForm from './components/PetForm'
import Home from './components/Home'

function App () {
  return (
    <>
      <Router>
        <NavBar/>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pets' element={<PetsContainer />} />
            <Route path='/pets/new' element={<PetForm />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
