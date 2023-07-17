import React from "react";
import { Link } from "react-router-dom";
import './Website.css';
import Footer from "./Footer";
// import { Button } from 'antd';

const Homepage = () => {

 return(
     <>
     <div className="fix">
      <div className="navbar">
         <div className="navbar-con">
           
             <a href="/">Home</a>
             <a href="/">Services</a>
             <a href="/">About</a>
             <a href="/">Contact</a>
            

            <div className="btn">
                 <Link to='/login'>
                   <button>Login/Signup</button>
                 </Link>
             </div>
       </div>
     </div>
     </div>
       
      
       <div className="nav-img">
         <div className="image">
           <img src="https://www.contrado.co.uk/blog/wp-content/uploads/2020/03/textile-vs-fabric.jpg" alt="body-img"/>
         </div>
       </div>
       <Footer/>
     </>

 );
}
export default Homepage;