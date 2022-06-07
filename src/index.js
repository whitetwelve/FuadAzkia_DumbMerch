import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './pages/register';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarHome from './partials/navbarHome';
import  Home  from './pages/home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>
);
