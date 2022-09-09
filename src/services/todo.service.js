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

async function list() {
  return api.get('/tasks')
}

async function create(data) {
  return api.post('/tasks', data)
}

async function edit(id,data) {
  return api.put(`/tasks/${id}`, data)
} 

async function remove(id) {
  return api.delete(`/tasks/${id}`)
}

export default { list, create, edit, remove }