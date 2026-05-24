import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  setNextPage,
  setPrevPage
} from '../redux/features/searchSlice'

const Pagination = () => {

  const dispatch = useDispatch()

  const { page } = useSelector(
    (store)=>store.search
  )

  return (
    <div className='flex justify-center items-center gap-5 py-8'>

      <button
      onClick={()=>{
        dispatch(setPrevPage())
      }}
      className='bg-gray-700 px-4 py-2 rounded'>
        Prev
      </button>

      <h2 className='text-xl font-semibold'>
        Page {page}
      </h2>

      <button
      onClick={()=>{
        dispatch(setNextPage())
      }}
      className='bg-indigo-600 px-4 py-2 rounded'>
        Next
      </button>

    </div>
  )
}

export default Pagination