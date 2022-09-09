import axios from 'axios';

const api = axios.create({
  transformRequest: [...axios.defaults.transformRequest],
  baseURL:process.env.REACT_APP_API_STAR
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


function listAll() {
    return api.get('/people')
}


export default { listAll }