import { useDispatch, useSelector } from 'react-redux'
import {fetchPhotos,fetchVideos,fetchGIF} from '../api/MediaApi'
import {setQuery,setLoading,setError,setResults} from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'
const ResultGrid = () => {
    const dispatch=useDispatch()
    const {query,activeTab,results,loading,error,page}=useSelector((store)=>store.search)

    useEffect(function(){
        if(!query) return 
        const getData=async ()=>{
        try {
            dispatch(setLoading())
            let data=[]
            if(activeTab=='photos'){
            let response=await fetchPhotos(query,page)
            data=response.results.map((items)=>({
                id:items.id,
                type:'photo',
                title:items.alt_description,
                thumbnail:items.urls.thumb,
                src:items.urls.regular,
                url:items.links.html
            }))
        }
        if(activeTab=='videos'){
            let response=await fetchVideos(query,page)
            data=response.videos.map((items)=>({
               id:items.id,
               type:'video',
               title:items.user.name || 'video',
               thumbnail:items.image,
               src:items.video_files[0].link,
               url:items.url
            }))
        }
        if(activeTab=='gif'){
            let response=await fetchGIF(query,page)
            console.log(response.data);
            data=response.data.map((items)=>({
                id:items.id,
                type:'gif',
                title:items.title,
                thumbnail:items.images.fixed_height.url,
                src:items.images.original.url,
                url:items.url
            }))
        }
        dispatch(setResults(data))
        } catch (err) {
            dispatch(setError(err.message))
        }
        
    }
        getData()
    },[query,activeTab,dispatch,page])
    if(error) return <h1>Error</h1>
    if(loading){
        return (
            <div className='grid grid-cols-5 gap-6 py-5 px-7'>
            {[...Array(10)].map((_,idx)=>(
                <div
                key={idx}
                className='h-70 rounded-xl bg-gray-700 animate-pulse'
                ></div>
            ))}
            </div>
        )
}
  return (

    <div className='grid grid-cols-5 gap-6 py-5 px-7'>
        {results.map((items,idx)=>{
            return <div key={idx}>
           <ResultCard items={items} />
            </div>
        })}
    </div>
  )
}

export default ResultGrid