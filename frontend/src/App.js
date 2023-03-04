import React,{useEffect} from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  { useDispatch} from  "react-redux"
import { ToastContainer} from 'react-toastify';
import SongList from "./pages/SongList";

import SongFormPage from "./pages/SongFormPage";
import {GET_SONGS}  from "./redux/constants/actionType"
function App() {

  const dispatch  =  useDispatch()

  useEffect(()=>{
    dispatch({type:GET_SONGS})
  },[dispatch])

  return (
    <>

  <Router>
        <Routes>
          <Route path="/" element={<SongList/> } />
          <Route path="/add-song" element={<SongFormPage/> } />
          <Route path="/h4" element={<h3>  Home  3</h3>} />
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
