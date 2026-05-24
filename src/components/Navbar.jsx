
import { Link } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const Navbar = () => {
  return (
    <div className=" sticky top-0 z-50 px-5 bg-blue-950 flex justify-between items-center">
        <h2 className='py-5 text-xl font-semibold'>
            <Link to='/'>Media Search</Link>
        </h2>
        <div className="flex gap-5">
            <Link className='text-base font-medium active:scale-95 bg-blue-100 text-black rounded px-2 py-1' to="/">Search</Link>
            <Link className='text-base font-medium active:scale-95 bg-blue-100 text-black rounded px-2 py-1' to="/collection">Collection</Link>
        </div>
    </div>
  )
}

export default Navbar