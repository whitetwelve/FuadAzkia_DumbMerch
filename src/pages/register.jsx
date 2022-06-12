import Logo from '../assets/img/DumbMerch_Logo.png'
import '../assets/css/style.css'
import { Form,Button } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Register(){


  const [data,setData] = useState({
    fullname : '',
    email : '',
    password : ''
  })

  const forChangeInput = (e) =>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  const forSubmitInput = (e) =>{
    e.preventDefault()
    console.log(data);
  }
  
    return(
  <>
    <div className="container">
      <div className="left-side">
        <img src={Logo} alt="logo-DumbMerch" />

          <div className="forText">
            <h5>Easy, Fast, and Reliable</h5>
              <p>Go shopping for merchandise, just go to dumb merch <br/>shopping. the biggest merchandise in <b>Indonesia</b></p>
          </div>

          <div className="inline">
            <Link to={'/login'}  id="btn-register">
              <p style={{marginTop:'6px',color:'white'}}>Login</p>
            </Link>
              <a href="#">Register</a>
            </div>
        </div>

          <div className="card">
            <p className="card-title">Register</p>

              <div className="card-body">
                <Form onSubmit={forSubmitInput}>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" name='fullname' autocomplete="off" onChange={forChangeInput} value={data.fullname} id="forName"/>
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" name="email" autocomplete="off" onChange={forChangeInput} value={data.email} id="forMail"/>
                  </div>

                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" name="password" onChange={forChangeInput} value={data.password} id="forPassword"/>
                  </div>

                <Button type="submit" className="btn btn-danger">Register</Button>
            </Form>
        </div>
    </div>
</div>
    </>
    )
}