import {Outlet, Navigate} from 'react-router-dom'

export default function PrivateRoute() {

    const isLogin = true;

  return isLogin == true ? <Outlet /> : <Navigate to="/login" /> ;
}