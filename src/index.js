import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/login';
import Service from './pages/service/service';
import Todo from './pages/todo/todo';
import Home from './pages/home/home'
import todoService from './services/todo.service'

setInterval(async()=> {
  if(!sessionStorage.getItem('token'))return;
  const { data } = await todoService.refresh();
  sessionStorage.setItem('token', data)
}, 1000 * 60 * 9)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/todo" element={<Todo/>}/>      
      <Route path="/home" element={<Home/>}/>      
    </Routes>
  </BrowserRouter>
);
