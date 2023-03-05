import React, { useState, useEffect } from "react"
import styled from '@emotion/styled';
import { useParams, useNavigate } from "react-router-dom"
import { UPDATE_SONG,GET_SONG_STATS } from "../redux/constants/actionType"
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify'
import { clearError, editSong } from "../redux/slice/songSlice";




const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: flex-start;
margin-left: 10px;
margin-right: 20px;
width: 100%;
`

const FormHeader = styled.h3`
font-family: 'Inter', Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 44px;
text-align: center;
color: #a85400;
margin: 1.5rem auto;
transition: transform 0.5s ease-out;
`
const Form = styled.form`
background: #fff;
padding: 15px;
margin-left: 24px;
margin-right: 24px;
width: 100%;
box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`
const Input = styled.input`
border: 0;
border-bottom: 1px solid #a85400;
padding: 1rem;
margin-top: 0.5rem;
width: 90%;
font-size: 1rem;
&:hover {
    border-bottom: 1px solid #a85400;
}
`
const Label = styled.label`
font-family: 'Inter', Arial, Helvetica, sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.5rem;
line-height: 44px;
color: #a85400;
display:block;
margin: 1rem;
transition: transform 0.5s ease-out;
`
const Select = styled.select`
border: 1px solid #a85400;
padding: 1rem;
margin-top: 1rem;
width: 90%;
font-size: 1.5rem;
`
const Button = styled.button`
cursor: pointer;
width: 90%;
border: none;
background: #a85400;
color: #FFF;
margin-top: 1rem;
padding: 1rem;
font-size: 1.2rem;
font-weight: 700;`

const genres = [
    'Tezeta',
    'Bati',
    'Ambassel',
    'Anchihoy',
    'Jazz',
    'Hip hop',
    'Rock music',
    'Soul music'
]


const SongForm = () => {

    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState({
        firrst_name: "",
        last_name: ""
    })
    const [album, setAlbum] = useState("")
    const [genre, setGenre] = useState("")


    const dispatch = useDispatch()
    const  navigate=  useNavigate()
    const { songs } = useSelector(state => state.addis)

     const {id}  = useParams()
   const song  = songs.find(s => s._id === id);

    const handleArtistChange = (e) => {
        setArtist({ ...artist, [e.target.name]: e.target.value })
    }


    useEffect(()=>{
        if(song._id){
            setTitle(song.title)
            setGenre(song.genre)
            setAlbum(song.album.album_name)
            setArtist(song.artist)
        }
    },[song])
    const handleSubmit = (e) => {
        e.preventDefault()
        const newSong = {
            _id: song._id,
            title, artist,
            album: {
                album_name: album
            },
            genre
        }
        dispatch({ type: UPDATE_SONG, newSong })
        dispatch({ type: GET_SONG_STATS })
        navigate("/")

    }




    return (
        <FormContainer>
            <FormHeader>Edit Song</FormHeader>
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Enter Song Title " name="title" value={title} onChange={e => setTitle(e.target.value)} />
                <Label>Artist Info</Label>
                <Input type="text" placeholder="First Name " name="first_name" value={artist.first_name} onChange={handleArtistChange} />
                <Input type="text" placeholder="Last Name " name="last_name" value={artist.last_name} onChange={handleArtistChange} />
                <Label>Album Info</Label>
                <Input type="text" placeholder="Album Name " name="album_name" value={album} onChange={e => setAlbum(e.target.value)} />
                <Label> Select Genre</Label>
                <Select value={genre} onChange={e => setGenre(e.target.value)}>
                    {
                        genres.map(gen => (
                            <option key={gen} value={gen}>  {gen}</option>
                        ))

                    }


                </Select>
                <Button>Save</Button>
            </Form>


        </FormContainer>
    )
}

export default SongForm