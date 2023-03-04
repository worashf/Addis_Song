import React,{useEffect} from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  { useDispatch} from  "react-redux"
import { ToastContainer} from 'react-toastify';
import SongList from "./pages/SongList";
import  EditSongPage  from "./pages/EditSongPage"
import SongFormPage from "./pages/SongFormPage";
import {GET_SONGS,GET_SONG_STATS}  from "./redux/constants/actionType"
function App() {

  const dispatch  =  useDispatch()

  useEffect(()=>{
    dispatch({type:GET_SONGS})
    dispatch({type:GET_SONG_STATS})
  },[dispatch])

  return (
    <>

  <Router>
        <Routes>
          <Route path="/" element={<SongList/> } />
          <Route path="/add-song" element={<SongFormPage/> } />
          <Route path="/song/:id" element={<EditSongPage/>} />
        </Routes>
      </Router>
    
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </>
  );
}

export default App;
