import  axiosInstance from  "../utils/axiosInstance"
import  axios  from  "axios"


const baseURL = `http://localhost:5000/api/v1`

export const  createSongApi  = async(song) => axios.post(`${baseURL}/songs`, song)

export const  getAllSongsApi  = async() => axios.get(`${baseURL}/songs`)

export const deleteSongApi  = async(id) =>  axiosInstance.delete(`/songs/${id}`)

export  const updateSongApi  = async(user) =>  axiosInstance.put(`/songs/${user.id}`, user)


