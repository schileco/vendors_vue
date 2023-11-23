import axios from 'axios'

const api = axios.create({
     baseURL:'https://vendor-schulze.vercel.app/'
})
export default api