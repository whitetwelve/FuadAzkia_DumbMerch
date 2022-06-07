import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './pages/register';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarHome from './partials/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarHome/>
    <Login></Login>
  </React.StrictMode>
);
