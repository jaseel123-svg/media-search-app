import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {
  const dispatch=useDispatch()
  const ClearCollection=()=>{
    dispatch(clearCollection())

  }

  const collection=useSelector((state)=>state.collection.items)
  return (
    <div className="overflow-auto px-10 py-6 ">
      {collection.length>0?<div className="flex justify-between">
        <h2 className='text-xl font-medium'>Your Collection</h2>
        <button
        onClick={()=>{
          ClearCollection()
        }}
        className='bg-red-600 px-5 py-2 text-base font-medium outline-none active:scale-95 cursor-pointer rounded'>Clear Collections</button>
      </div>:<h2 className='text-5xl font-medium text-center py-10 text-gray-300'>Collection is Empty</h2>}
      <div className='grid grid-cols-5 gap-6 py-5' >
      {collection.map((items,idx)=>{
        return <div key={idx} className="">
          <CollectionCard items={items}/>
        </div>
      })}
    </div>
    </div>
  )
}

export default CollectionPage