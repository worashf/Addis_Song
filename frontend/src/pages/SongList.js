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
const SongList = () => {

const {songs} = useSelector(state => state.addis)
const  dispatch   = useDispatch()

useEffect(()=>{
    dispatch({type:GET_SONGS})
  },[dispatch])

    return (
        <Container >
            <Header />
            <Body>
                <h1>  Song list</h1>
              
                <DataTable songs ={songs}/>
                 
                  


            </Body>
        </Container>
    )
}
export default SongList