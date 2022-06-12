import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './pages/Register';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.css';
import  Home  from './pages/Home';
import Profile from './pages/Profil';
import DetailPage from './pages/DetailPage';
import ListCategory from './pages/ListCategory';
import EditCategory from './pages/EditCategory';
import ListProducts from './pages/ListProduct';
import EditProduct from './pages/EditProduct';
import Complain from './pages/Complain';
import PrivateRoute from './components/PrivateRoute';
import EditProfile from './pages/EditProfile';
import AboutUs from './pages/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/detail-page' element={<DetailPage/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/category' element={<ListCategory/>}/>
        <Route exact path='/edit-category' element={<EditCategory/>}/>
        <Route exact path='/edit-product' element={<EditProduct/>}/>
        <Route exact path='/products' element={<ListProducts/>}/>
        <Route exact path='/complain' element={<Complain/>}/>
        <Route exact path='/about-Us' element={<AboutUs/>}/>
        <Route element={<PrivateRoute/>}>
            <Route exact path='/profile/:id' element={<Profile/>}/>
            <Route exact path='/edit-profile/:id' element={<EditProfile/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
