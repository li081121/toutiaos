import axios from 'axios'

const request = axios.create({
  baseURL:'http://localhost:8080/pc.html#/login'
})

export default request