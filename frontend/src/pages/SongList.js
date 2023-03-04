import React,{useEffect} from "react"
import Header from "../components/Header"
import styled from '@emotion/styled';
import DataTable from "../components/DataTable";
import  {useSelector, useDispatch}  from  "react-redux"
import { GET_SONGS } from "../redux/constants/actionType";

const Container = styled.div`
display: flex;
flex-direction: column;
`
const Body = styled.div`
 color : #111;
 margin: 100px  auto;
`
const StatContainer = styled.div`
display: flex:
height: 5rem;
color: #111;
margin: 1rem 
`
const Wrap = styled.div`
display:flex;
justifyContent:space-evenly;
`
const SongList = () => {

const {songs, songStats} = useSelector(state => state.addis)
const  dispatch   = useDispatch()

useEffect(()=>{
    dispatch({type:GET_SONGS})

  },[dispatch])

    return (
        <Container >
            <Header />
            <Body>
              <StatContainer>
        
                <Wrap>
                <p>  Total of  <span style={{color: " #a85400",marginLeft: "2px"}} > {songStats.songCount}</span> songs </p>
                <p>  Total of  <span style={{color: " #a85400",marginLeft: "2px"}} > {songStats.artistCount}</span> artists </p>
        
        
                </Wrap>
                <Wrap>
                <p>  Total of  <span style={{color: " #a85400",marginLeft: "2px"}} > {songStats.albumCount}</span> albums </p>
                <p>  Total of  <span style={{color: " #a85400",marginLeft: "2px"}} > {songStats.genreCount}</span> genres</p>
            
                </Wrap>
                
              </StatContainer>
              
           
           
                <DataTable songs ={songs}/>
                 
                  


            </Body>
        </Container>
    )
}
export default SongList