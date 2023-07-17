import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from "./component/website/Homepage";
import Login from './component/website/Login';
import New from "./component/website/New";
import Registration from "./component/website/Registration";
import Shopping from "./component/website/Shopping";


const WebRoute =()=>{
    return(
       <Router>
           <Routes>
               <Route exact path='/' element={<Homepage />} />
               <Route exact path='/login' element={<Login/>} />
               <Route exact path='/registration' element={<Registration />} />
               <Route exact path='/shopping' element={<Shopping />}/>
               <Route exact path='/new' element={<New/>}/>
           </Routes>
       </Router>
   
    );
}
export default WebRoute;