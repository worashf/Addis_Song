import  axiosInstance from  "../utils/axiosInstance"
// import  axios  from  "axios"



// const baseURL = `http://localhost:5000/api/v1`

export const  createSongApi  = async(song) => axiosInstance.post(`/songs`, song)

export const  getAllSongsApi  = async() => axiosInstance.get(`/songs`)

export const deleteSongApi  = async(id) =>  axiosInstance.delete(`/songs/${id}`)

export  const updateSongApi  = async(song) =>  axiosInstance.put(`/songs/${song._id}`, song)

export const  getAllSongsCountApi  = async()=> axiosInstance.get("/songs/total")
export const getArtistsCountApi  = async() => axiosInstance.get("/artists/total")
export const getAlubmsCountApi  = async() => axiosInstance.get("/albums/total")
export const getGenresCountApi = async() => axiosInstance.get("/genres/total")
export const getSongsByGenreApi = async() => axiosInstance.get("/genres/songs/total")
export const getCountByArtistApi = async() => axiosInstance.get("/artists/songs/total")



