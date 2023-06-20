import './styles.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/index'
import Dashboard from './pages/dashboard/index'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </div>
  )
}


export default App
