import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'

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
    </>
  )
}

export default App
