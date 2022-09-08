import { Axios } from 'axios';

const api = new Axios({baseURL:process.env.API_URL});
api.interceptors.request.use((config)=>{
  const token = sessionStorage.getItem('token')
  if(!token) return config;
  config.headers = {
    Authorization: `Bearer ${token}` 
  }
  return config;
});

async function login(user,password) {
  return api.post('/login',{user,password});
}

async function register(data) {
  return api.post('/register', data);
}

async function profile() {
  return api.get('/profile')
}

export default { login, register, profile }