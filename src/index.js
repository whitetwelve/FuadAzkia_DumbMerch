import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './pages/register';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarHome from './partials/navbarHome';
import  Home  from './pages/home';
import DetailPage from './pages/detailPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DetailPage/>
  </React.StrictMode>
);
