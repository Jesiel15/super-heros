import axios from "axios"

const api = axios.create({
  baseURL:"https://ec2-52-14-153-181.us-east-2.compute.amazonaws.com:443"
})

export default api;