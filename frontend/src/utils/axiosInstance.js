import axios  from  "axios"
const baseURL = `https://addismus.onrender.com/api/v1`
const axiosInstance = axios.create({
    baseURL,
})
export default axiosInstance;