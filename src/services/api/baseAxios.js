import axios from "axios"

const BaseService = axios.create({
    baseURL: 'https://api-twon.herokuapp.com/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  
  BaseService.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      console.error(error)
    }
  )
  
  
  export default BaseService