import { createSlice } from "@reduxjs/toolkit";

const searchSlice= createSlice({
    name:"search",
    initialState:{
        query:'',
        activeTab:'photos',
        results:[],
        loading:false,
        error: null,
        page:1
    },
    reducers:{
        setQuery(state,action){
            state.query=action.payload
        },
        setActiveTab(state,action){
            state.activeTab=action.payload
        },
        setResults(state,action){
            state.loading=false
            state.results=action.payload
        },
        setLoading(state){
            state.loading=true
            state.error=null
        },
        setError(state,action){
            state.error=action.payload
            state.loading=false
        },
        clearResults(state){
            state.results=[]
        },
        setNextPage(state){
            state.page += 1
        },

        setPrevPage(state){
            if(state.page > 1){
                state.page -= 1
            }
        },

        resetPage(state){
            state.page = 1
        },
    }
})

export const {setQuery,setActiveTab,setResults,setLoading,setError,clearResults,setNextPage,setPrevPage,resetPage}=searchSlice.actions
export default searchSlice.reducer