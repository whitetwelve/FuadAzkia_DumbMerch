import logo from '../assets/img/DumbMerch_Logo.png'
import {NavLink} from 'react-router-dom'
import "../assets/css/style.css"
export default function NavbarHome(){
    return(
     <nav className="navbar">
         <div className="container-fluid">
        <img src={logo} alt='logo-DumbMerch'/>
        <div className="nav-item d-block">
        <ul>
            <NavLink to='/complain' className="me-4" style={{textDecoration:'none',color :'white'}} activeClassName="navbar__link--active">
                Complain
            </NavLink>
            <NavLink to="/profile" className='me-4' style={{textDecoration :'none', color:'white'}}>
                Profile
            </NavLink>
            <NavLink to='/login'className='me-4' style={{textDecoration :'none', color:'white'}}>
                Logout
            </NavLink>
        </ul>
        </div>
         </div>
           </nav>
    )
}