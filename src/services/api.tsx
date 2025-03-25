import axios from "axios"

const api = axios.create({
  baseURL:"http://ec2-52-14-153-181.us-east-2.compute.amazonaws.com:7000"
})

export default api;