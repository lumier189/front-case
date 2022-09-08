import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/login';
import Service from './pages/service/service';
import Todo from './pages/todo/todo';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/todo" element={<Service/>}/>
      <Route path="/service" element={<Todo/>}/>      
    </Routes>
  </BrowserRouter>
);
