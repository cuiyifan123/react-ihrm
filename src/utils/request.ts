import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
const url = import.meta.env.VITE_API_URL

const instance = axios.create({
  baseURL: url,
  timeout: 5000
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
const request = <T, D = ResponseResult<T>>(config: AxiosRequestConfig) => {
  return instance.request<D>(config)
}
export default request
