import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection, removeToast } from '../redux/features/collectionSlice';

const CollectionCard = ({items}) => {
    const dispatch=useDispatch()
    const removeFromCollection=(items)=>{
        dispatch(removeCollection(items))
        dispatch(removeToast())
    }
  return (
    <div className="w-full h-70 relative bg-white rounded-xl overflow-hidden">
        <a href={items.url} target='_blank'
        className='h-full '
        >
            {items.type=='photo'?<img className='h-full w-full object-cover object-center' src={items.src} alt="" />:''}
            {items.type=='video'?<video className='h-full w-full object-cover object-center' autoPlay loop muted src={items.src}></video>:''}
            {items.type=='gif'?<img className='h-full w-full object-cover object-center' src={items.src} alt="" />:''}
        </a>
        <div id="bottom" className="absolute bottom-0 w-full flex items-end gap-3 px-4 py-4 text-white">
            <h2 className='text-lg font-semibold w-[70%] line-clamp-2'>{items.title}</h2>
            <button 
            onClick={()=>{
                removeFromCollection(items)
                
            }}
            className='bg-indigo-600 text-white rounded px-3 py-1 font-medium active:scale-95
            flex-shrink-0 cursor-pointer active:scale-95'>Remove</button>
        </div>
    </div>
  )
}

export default CollectionCard
