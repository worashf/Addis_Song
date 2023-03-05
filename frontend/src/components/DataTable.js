import React from "react"
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {AiFillDelete, AiFillEdit}  from "react-icons/ai"



import  {DELETE_SONG, GET_SONG_STATS} from "../redux/constants/actionType"
import { useDispatch,} from "react-redux";
import { toast } from 'react-toastify'

const Table  = styled.table`
border: 1px solid #ccc;
border-collapse: collapse;
margin: 10px auto;
width: 100%;
table-layout: fixed;
`
const Tr  = styled.tr`
&:nth-of-type(odd) {
   background: #eee;
} 
`

const Th  = styled.th`
background: #a85400;
color: white; 
font-weight: bold; 
padding: 10px; 
border: 1px solid #ccc; 
text-align: left; 
font-size: 18px;
`
const Td  = styled.td`
padding: 10px; 
border: 1px solid #ccc; 
text-align: left; 
font-size: 18px;
`
const Button =  styled.button`
cursor: pointer;
border: none;
border-radius: 5px;
background: #a85400;
color: #FFF;
padding: 0.6rem;
font-size: 1.2rem;
margin-right: 2rem;
`




const DataTable =({songs}) =>{

   const dispatch = useDispatch()

    const handleDelete =(id) =>{
      dispatch({type:DELETE_SONG, id})
      dispatch({ type: GET_SONG_STATS })
      toast.success("Song deleted sucessfuly")
   
    }
    return (
        <Table>
            <thead>
                <Tr>
                <Th> Song Title</Th>
                <Th> Artist</Th>
                <Th> Allbum</Th>
                <Th> Genre</Th>
                <Th>Action</Th>
                </Tr>
            </thead>
            <tbody>
                {
                  songs ?  (songs.map(song =>(
                        <Tr key = {song._id}>
                        <Td> {song.title}</Td>
                        <Td> {song.artist.first_name}</Td>
                        <Td> {song.album.album_name}</Td>
                        <Td> {song.genre}</Td>
                        <Td><Button onClick={()=>handleDelete(song._id)}> <AiFillDelete/> </Button>
                       <Link to={`/song/${song._id}`} >
                        <AiFillEdit style={{fontSize:"1.5rem"}}/>
                      </Link></Td>
                        
                    </Tr>
                    ))) : (
                        <h4 style={{color:"#a85400"}}> No Data found</h4>
                    )
                }
             


            </tbody>
        
        
        </Table>
    )
}
export default  DataTable