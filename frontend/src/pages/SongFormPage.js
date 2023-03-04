import Header from "../components/Header"
import styled from '@emotion/styled';
import SongForm from "../components/SongForm";
const Container = styled.div`
display: flex;
flex-direction: column;
`
const Body = styled.div`
 color : #111;
 margin: 100px  auto;
`
const SongList = () => {

    return (
        <Container >
            <Header />
            <Body>
              
                <SongForm />


            </Body>
        </Container>
    )
}
export default SongList