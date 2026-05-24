import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Pagination from '../components/Pagination'
const HomePage = () => {
    const {query}=useSelector((store)=>store.search)
  return (
    <div className=' min-h-screen text-white w-full '>
        <div className="sticky top-[68px] z-40">
                <div className=' bg-gray-800 p-5'>
                    <SearchBar />
                    {query!=''?<Tabs/>:''}
                </div>
            </div>
      {query!==''?<ResultGrid />:''}
      {query!=='' && <Pagination/>}
    
    </div>
  )
}

export default HomePage