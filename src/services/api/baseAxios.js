import axios from "axios"

const BaseService = axios.create({
    baseURL: 'https://tiki.vn/api/v2/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    withCredentials: true
  })
  
  BaseService.interceptors.response.use(
    function (response) {
      return response.data
    },
    function (error) {
      console.error(error)
    }
  )
  
  
  export default BaseService