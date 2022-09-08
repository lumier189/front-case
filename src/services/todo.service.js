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