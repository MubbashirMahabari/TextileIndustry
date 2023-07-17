import React, { useState } from "react";
// import { Link } from "react-router-dom";

import axios from "axios";
import {useNavigate} from 'react-router-dom';
// import user from "../../../../backend/api/models/user";



  const Registration = (props) => {
  const navigate = useNavigate();

  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");




const register = (e) => {
  e.preventDefault();
  console.log({fname,lname,password,confirmPassword,city,state})
  axios.post('http://localhost:9000/user/signup',{
    fname:fname ,
    lname: lname,
    email: email,
    password:password,
    confirmPassword:confirmPassword,
    city:city,
    state:state
  })
  .then((result) => {
    console.log(result.data.message)

    if(result.data.message === "User created")
    {
      alert('registration successful');
      navigate(`/login`);
    }
    else if(Response.data.message === "User already exists")
    {
         alert("user already exists");
    }

   })
}


    return(
      <>
     <div className="registration-page">
         <img src="https://www.lungcancercenter.com/app/uploads/2020/07/LC-Textile_2800x1800--scaled.jpg" alt="registration-img"/>
         <div className="registration-form">
           <form onSubmit={register}>
              <div>
                <label htmlFor="inputFname4" className="form-label">First Name</label>
                <input type="text" value={fname} className="form-control" onChange={(e) => setFname(e.target.value)} placeholder="First Name" id="inputFname4" required/>
             </div>
 
            <div>
             <label htmlFor="inputLname4" className="form-label">Last Name</label>
             <input type="lname" value={lname} className="form-control" onChange={(e) => setLname(e.target.value)} placeholder="Last Name" id="inputLname4"  required/>
           </div>
    

           <div className="col-md-6">
               <label htmlFor="inputEmail4" className="form-label">Email</label>
               <input type="email" value={email} className="form-control" onChange={(e) =>setEmail(e.target.value)} placeholder="Enter Email" id="inputEmail4"  required/>
           </div>

            <div className="col-md-12">
               <label htmlFor="inputPassword4" className="form-label">Password</label>
               <input type="password" value={password} className="form-control" onChange={(e) =>setPassword(e.target.value)} placeholder="Enter Password" id="inputPassword4" minLength={8} required/>
           </div>
     
           <div className="col-md-14">
              <label htmlFor="inputPassword4" className="form-label">Confirm Password</label>
              <input type="password" value={confirmPassword} className="form-control" onChange={(e) =>setConfirmPassword(e.target.value)} placeholder="Confirm" id="inputPassword4"  required/>
           </div>
      
            <div className="col-md-5">
                <label htmlFor="inputCity" className="form-label">City</label>
                   <select id="inputState" value={city} onChange={(e) =>setCity(e.target.value)} className="form-select"  required>
                     <option selected >Choose...</option>
                     <option value='Bijapur' >Bijapur</option>
                     <option value='Bangalore'>Bangalore</option>
                     <option value='Pune' >Pune</option>
                  </select>
             </div>
           <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">State</label>
                <select id="inputState" value={state}  onChange={(e) =>setState(e.target.value)} className="form-select" required>
                  <option selected>Choose...</option>
                  <option>Karnataka</option>
                  <option>Maharashtra</option>
               </select>
            </div>
          <div className="col-12">
          {/* <Link to='/login'> */}
            <button type="submit" className="btn btn-primary">Register</button>
            {/* </Link> */}
              
          </div>
    </form>
 </div>
</div>

</>
    );
}
export default Registration;