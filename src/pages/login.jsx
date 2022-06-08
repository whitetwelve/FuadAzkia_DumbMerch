import Logo from '../assets/img/DumbMerch_Logo.png'
import '../assets/css/style.css'

export default function Login(){
    return(
        <>
        <div className="container">
          <div className="left-side">
            <img src={Logo} alt="logo-DumbMerch" />
              <div className="forText">
                <h5>Easy, Fast, and Reliable</h5>
                <p>Go shopping for merchandise, just go to dumb merch <br/>shopping. 
                the biggest merchandise in <b>Indonesia</b></p>
            </div>
            <div className="inline">
              <button type='submit' class="btn btn-danger">
              Login
              </button>
              <a href="#Register">Register</a>
            </div>
        </div>
    <div className="card" id="card">
      <p className="card-title">Login</p>
        <div className="card-body">
          <form>
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
    </>
    )
}