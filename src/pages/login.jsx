import Logo from '../assets/img/DumbMerch_Logo.png'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Home from './Home'
import '../assets/css/style.css'

export default function Login(){

  const [data, setData] = useState({
    isLogin:false,
    user:{
        email:'',
        password:''
    }
  })

  useEffect(() => {
    console.log("Update succesful yeww!")

  },[data])
  console.log(data);
  
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const email = document.querySelector('#forMail1').value
    const password = document.querySelector('#forPassword1').value

    setData({
        isLogin: true,
        user: { 
            email,
            password
        }
    })
}

    return(
    <>
      {data.isLogin ? <Home/> :
      (
        
      <div className="container">
        <div className="left-side">
          <img src={Logo} alt="logo-DumbMerch" />

            <div className="forText">
              <h5>Easy, Fast, and Reliable</h5>
              <p>Go shopping for merchandise, just go to dumb merch <br/>shopping. the biggest merchandise in <b>Indonesia</b></p>
            </div>

            <div className="inline">
              <button type='submit' class="btn btn-danger">Login</button>
              <Link to='/register'>Register</Link>
            </div>

        </div>

    <div className="card" id="card">
      <p className="card-title">Login</p>
        <div className="card-body">
          <form onSubmit={handleOnSubmit}>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Email" id="forMail1"/>
            </div>
            
            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password" id="forPassword1"/>
            </div>
              <button type="submit" class="btn btn-danger" id='login-btn'>Login</button>
          </form>
          
      </div>
    </div>
  </div>
      )}
      
    </>
    )
}