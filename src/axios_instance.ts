import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  } else {
    delete config.headers['Authorization']
  }
  return config
})

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if ((error.response.status = 401)) {
    }
  }
)

export { instance as Api }
