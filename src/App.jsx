import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='container'>
       <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' Component={Home} exact></Route>
              <Route path='/jobs' Component={Jobs}></Route>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App