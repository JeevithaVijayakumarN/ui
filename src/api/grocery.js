

import axios from "axios";

const groceryApi = axios.create({
  baseURL: "http://localhost:8081/api",
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});

groceryApi.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2))
  return request
})

groceryApi.interceptors.response.use(response => {
  // console.log('Response:', JSON.stringify(response, null, 2))
  return response
})

export default groceryApi;