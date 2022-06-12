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
            <div className="row">
                <div cl assName="col">
                    <NavLink to='/about-us'className="me-4" style={{textDecoration:'none',color :'white'}} >
                        About us
                    </NavLink>

                    <NavLink to='/complain' className="me-4" style={{textDecoration:'none',color :'white'}} >
                        Complain
                    </NavLink>

                    <NavLink to="/profile/0" className='me-4' style={{textDecoration :'none', color:'white'}}>
                        Profile
                    </NavLink>

                    <NavLink to='/login'className='me-4' style={{textDecoration :'none', color:'white'}}>
                        Logout
                    </NavLink>
                </div>
            </div>
        </ul>
        </div>
    </div>
</nav>
    )
}