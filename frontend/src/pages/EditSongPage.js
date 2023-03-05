import Header from "../components/Header"
import styled from '@emotion/styled';
import EditSong from "../components/EditSong";
const Container = styled.div`
display: flex;
flex-direction: column;
`
const Body = styled.div`
 color : #111;
 margin: 20px  auto;
`
const SongList = () => {

    return (
        <Container >
            <Header />
            <Body>
              
                <EditSong />


            </Body>
        </Container>
    )
}
export default SongList