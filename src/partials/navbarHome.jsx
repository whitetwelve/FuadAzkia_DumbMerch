import logo from '../assets/img/DumbMerch_Logo.png'

export default function NavbarHome(){
    return(
     <nav className="navbar">
         <div className="container-fluid">
        <img src={logo} alt='logo-DumbMerch'/>
        <div className="nav-item d-block">
        <ul>
            <a href="#userShop"className='me-4' style={{textDecoration :'none', color:'white'}}>
                Complain
            </a>
            <a href="profil"className='me-4' style={{textDecoration :'none', color:'white'}}>
                Profile
            </a>
            <a href='login' style={{textDecoration :'none', color:'white'}}>
                Logout
            </a>
        </ul>
        </div>
         </div>
           </nav>
    )
}