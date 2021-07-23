import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8100'

export const login = ({email, password}) => {
  const response = axios
    .get(`/api/posts?email=${email}&password=${password}`)

  return response
}

export const register = (formData) => {
  const response = axios
    .post('/api/posts', formData)

  return response;
}
