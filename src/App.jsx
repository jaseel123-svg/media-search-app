import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import  { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'

import { ToastContainer} from 'react-toastify';
const App = () => {
  return (
    <div className=' min-h-screen text-white w-full bg-gray-800'>
        <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>
      <ToastContainer/>
    
    </div>

  )
}

export default App