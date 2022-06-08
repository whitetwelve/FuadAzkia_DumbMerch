import logo from '../assets/img/DumbMerch_Logo.png'
import {NavLink} from 'react-router-dom'
import "../assets/css/style.css"
export default function NavbarAdmin(){
    return(
     <nav className="navbar">
         <div className="container-fluid">
        <img id="navLogo"src={logo} alt='logo-DumbMerch'/>
        <div className="nav-item">
        <ul>
            <NavLink to='/complain' className="me-4" style={{textDecoration:'none',color :'white',position:'absolute',left:'-5rem'}}>
                Complain
            </NavLink>
            <NavLink to="/category" className='me-4' style={{textDecoration :'none', color:'white'}}>
                Category
            </NavLink>
            <NavLink to='/product'className='me-4' style={{textDecoration :'none', color:'white'}}>
                Product
            </NavLink>
            <NavLink to='/login'className='me-4' style={{textDecoration :'none', color:'white',}}>
                Logout
            </NavLink>
        </ul>
        </div>
         </div>
           </nav>
    )
}