import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import PetsContainer from './containers/PetsContainer'

function App () {
  return (
    <>
      <Router>
        <NavBar/>
        <div>
          <Routes>
            <Route/>
          </Routes>
        </div>
      </Router>
      <PetsContainer/>
    </>
  )
}

export default App
