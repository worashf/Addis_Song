import React from "react"
import styled from '@emotion/styled';


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

const DataTable =({songs}) =>{

    return (
        <Table>
            <thead>
                <Tr>
                <Th> Song Title</Th>
                <Th> Artist</Th>
                <Th> Allbum</Th>
                <Th> Genre</Th>

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

