import Header from "../components/Header"
import styled from '@emotion/styled';
import DataTable from "../components/DataTable";
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
                <h1>  Song list</h1>
                <DataTable />


            </Body>
        </Container>
    )
}
export default SongList