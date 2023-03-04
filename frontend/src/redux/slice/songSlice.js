 import  {createSlice} from "@reduxjs/toolkit"



 const songSlice  =  createSlice({
    name: 'songs',
    initialState: {
      songs: [],
      songStats: [],
      error : null
    },
    reducers:{
        addSong :(state, {payload}) =>{
            state.songs.push(payload)
            return state
        },
        editSong :(state, {payload}) =>{
            state.songs = state.songs.map(song => song._id ===payload._id ? payload : song)
            return state
        },
        removeSong : (state,{payload}) =>{
            state.songs = state.songs.filter(song => song._id !== payload)
            return state
        },
        retriveAllSongs : (state, {payload}) =>{
            state.songs  = payload
        },
        getSongStats : (state, {payload}) =>{
            state.songStats  = payload
        },
        setError: (state, {payload}) =>{
            state.error = payload
        },
        clearError :(state, {payload})=>{
            state.error  = payload
        }
    }
 })

export  const {addSong,editSong,removeSong,retriveAllSongs, setError, clearError, getSongStats}  = songSlice.actions

 export default  songSlice.reducer