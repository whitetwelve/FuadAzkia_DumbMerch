import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './pages/register';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.css';
import  Home  from './pages/home';
import Profile from './pages/profile';
import DetailPage from './pages/detailPage';
import ListCategory from './pages/listCategory';
import EditCategory from './pages/editCategory';
import ListProducts from './pages/listProducts';
import EditProduct from './pages/editProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/detail-page' element={<DetailPage/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/category' element={<ListCategory/>}/>
        <Route exact path='/edit-category' element={<EditCategory/>}/>
        <Route exact path='/edit-product' element={<EditProduct/>}/>
        <Route exact path='/products' element={<ListProducts/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
