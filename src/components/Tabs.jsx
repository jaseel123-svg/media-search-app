import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs=['photos','videos','gif']
    const dispatch=useDispatch()
    const activeTab=useSelector((state)=>state.search.activeTab)
  return (
    <div className='flex mt-5 sticky top-0 z-50 gap-5 px-2 py-1 '>
        {tabs.map(function(elem ,idx){
            return(
            <button 
            onClick={()=>{
                dispatch(setActiveTab(elem))
            }}
            className={`${(activeTab==elem?'bg-blue-700':'bg-gray-500')} transition px-3 py-2 rounded active:scale-95 uppercase cursor-pointer`}  key={idx}>{elem}</button>
            )
        })}
    </div>
  )
}

export default Tabs