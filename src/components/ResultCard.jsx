import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({items}) => {
  const dispatch=useDispatch()
  const addToCollection=(items)=>{
    dispatch(addCollection(items))
    dispatch(addedToast())
  }
  return (
    <div className="w-full h-[280px] relative bg-white rounded-xl overflow-hidden">
        <a href={items.url} target='_blank'
        className='h-full '
        >
            {items.type=='photo'?<img
            loading='lazy' 
            className='h-full w-full object-cover object-center' src={items.src} alt="" />:''}
            {items.type=='video'?<video className='h-full w-full object-cover object-center' preload='metadata' muted autoPlay loop src={items.src}></video>:''}
            {items.type=='gif'?<img 
            loading='lazy' 
            className='h-full w-full object-cover object-center' src={items.src} alt="" />:''}
        </a>
        <div id="bottom" className="absolute bottom-0 w-full flex items-end gap-3 px-4 py-4 text-white">
            <h2 className='text-lg font-semibold w-[70%] line-clamp-2'>{items.title}</h2>
            <button 
            onClick={()=>{
              addToCollection(items)
            }}
            className='bg-indigo-600 text-white rounded px-3 py-1 font-medium active:scale-95 flex-shrink-0 cursor-pointe'>Save</button>
        </div>
    </div>
  )
}

export default ResultCard