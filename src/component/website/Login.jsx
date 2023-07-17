import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
// import { useEffect } from "react";
import axios from "axios";


const Login = (props) => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log({email,password})

  const handleEmail = (e) => {
       setEmail(e.target.value)
  }
  
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const login = (e) => {
    e.preventDefault()
    console.log({email,password})
    axios.post('http://localhost:9000/user/login',{
      email: email,
      password:password
    })
    .then((result) => {
      console.log(result.data.message)

      
      if(result.data.message === "Auth Successful")
      {
        alert('login successful');
       navigate(`/shopping`);
      }
     })
     
    //  .catch((result) => {
    //   console.log('hello')

    //   if(result.data.message === "Auth failed")
    //   {
    //     alert('login failed');
    //   }

    //  })
    
  }

  return (
    <>

      <div className="image">
        <img src="https://c0.wallpaperflare.com/preview/660/47/652/assorted-blurred-background-boutique-close-up.jpg" alt="login-img" />

          <div className="login">

            <div className="login-container">

              <form onSubmit={login} >

                <h1>Login</h1>


              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="email" value={email} className="form-control" onChange={handleEmail} placeholder="Enter the Email" id="inputEmail3" required />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" value={password} className="form-control" onChange={handlePassword} placeholder="Enter the Password" id="inputPassword3" required />
                </div>
              </div>
                <button type="submit" className="btn btn-primary">Login</button>
              <p>
                <Link to='/registration'>Create Account</Link>
              </p>

            </form>
          </div>
        </div>
      </div>




    </>

  );
}
export default Login;