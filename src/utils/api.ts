import axios from 'axios'

const api = axios.create({
  baseURL: 'https://app-conatus-service.onrender.com/'
})

export default api
