import React, { useEffect } from "react"
import Header from "../components/Header"
import styled from '@emotion/styled';
import DataTable from "../components/DataTable";
import { useSelector, useDispatch } from "react-redux"
import { GET_SONGS, GET_SONG_STATS } from "../redux/constants/actionType";

const Container = styled.div`
display: flex;
flex-direction: column;
`
const Body = styled.div`
 color : #111;
 margin: 0  auto;
`
const StatContainer = styled.div`
background: url('/back_song.png');
background-repeat: no-repeat;
background-size: cover;
background-position: 100%;
object-fit: cover;
width: 100%;
height: 100%;
padding: 20px 3rem;
text-align: center;
color: 		 #a85400;
`
const MainWrap = styled.div`
 display: flex;
 justify-content: space-between;
 width:90%;
 margin: 0 2rem;
`
const Wrap = styled.div`
display:flex;
justifyContent:space-evenly;
`
const SongList = () => {

  const { songs, songStats } = useSelector(state => state.addis)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: GET_SONGS })
    dispatch({ type: GET_SONG_STATS })

  }, [dispatch])

  return (
    <Container >
      <Header />
      <Body>
        <StatContainer>
          <MainWrap>
            <div>
              <Wrap>
                <p>  Total of  <span style={{ color: "#000", marginLeft: "2px" }} > { songStats && songStats.songCount}</span> songs, </p>
                <p style={{ marginLeft: "5px" }}>  By  <span style={{ color: " #000", marginLeft: "2px" }} > { songStats && songStats.artistCount}</span> artists. </p>
              </Wrap>
              <Wrap>
                <p>  Total of  <span style={{ color: " #000", marginLeft: "2px" }} > { songStats && songStats.albumCount}</span> albums, </p>
                <p style={{ marginLeft: "5px" }}>  Total of  <span style={{ color: " #000", marginLeft: "2px" }} > { songStats && songStats.genreCount}</span> genres.</p>
              </Wrap>
            </div>
            <div>
              <h3>By Genre</h3>

              { songStats &&
                songStats.songCountByGenre && songStats.songCountByGenre.map(songStat => (
                  <p>  Total of  <span style={{ color: " #000", marginLeft: "2px" }} > {songStat.count}</span> songs in {songStat._id} </p>
                ))
              }


            </div>
            <div>
              <h3>By Artists</h3>
              { songStats &&
                songStats.songCountByArtist &&  songStats.songCountByArtist.map(songStat => (
                  <p> {songStat._id} <span style={{ color: " #000", marginLeft: "2px" }} > play </span> {songStat.countByArtist} songs, {songStat.albumsCount} albums, and {songStat.genresCount} genres</p>
                ))
              }


            </div>
          </MainWrap>


        </StatContainer>



        <DataTable songs={songs} />




      </Body>
    </Container>
  )
}
export default SongList