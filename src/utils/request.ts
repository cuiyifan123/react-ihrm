import axios from 'axios'
const url = import.meta.env.VITE_API_URL

const instance = axios.create({
  baseURL: url,
  timeout: 5000
})

instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default instance
