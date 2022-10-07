import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Pets from './components/Pets'
import Pet from './components/Pet'
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
            <Route path='/pets' element={<Pets />} />
            <Route path='/pets/new' element={<PetForm />} />
            <Route path='/pets/edit' element={<PetForm />}/>
            <Route path='/pets/:id' element={<Pet />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
