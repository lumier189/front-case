import axios from 'axios';

const api = axios.create({
  transformRequest: [...axios.defaults.transformRequest],
  baseURL:process.env.REACT_APP_API_URL
});
api.interceptors.request.use((config)=>{
  const token = sessionStorage.getItem('token')
  if(!token) return config;
  config.headers = {
    Authorization: `Bearer ${token}`,
    ContentType: 'application/json',
  }
  return config;
});
api.interceptors.request.use((config)=>{
  config.headers = {
    ContentType: 'application/json'
  }
  return config
});


async function login(email,password) {
  return api.post('/auth/login',{email,password});
}

async function register(name,email,password) {
  return api.post('/auth/register',{name,email,password});
}

async function profile() {
  return api.get('/auth/profile')
}

async function refresh() {
  return api.post('/auth/refresh')
}

export default { login, register, profile, refresh };