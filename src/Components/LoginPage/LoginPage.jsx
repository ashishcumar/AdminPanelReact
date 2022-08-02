import React, { useEffect, useState } from "react";
import { NavbarLogin } from "../Navbar/NavbarLogin";
import { Footer } from "../Footer/Footer";
import LoginCss from "./LoginPage.module.css";
import { BsPatchCheck } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {Link, useNavigate} from 'react-router-dom'


export const LoginPage = () => {
  const [showPop, setShowPop] = useState(false);
  const [name ,setName] = useState()
  const [passWord ,setPassWord] = useState()
  const navigate  =  useNavigate()

 let validateInput = () => {
  if(name === passWord) {
      localStorage.setItem('loginStatus',true)
      navigate('/')
  }else{
    alert('Username and Password should be same')
  }
}
  
 useEffect(()=>{
  if(localStorage.getItem('loginStatus')){
    navigate('/')
  } 
  })



  return (
    <>
      <NavbarLogin />

      <div className={LoginCss.LoginDiv}>
        <div className={LoginCss.LoginForm}>
          <h2> Welcome to Dashboard, Login </h2>
          <p> Username </p>
          <input type="text" id="userName"  onChange={(e)=> {setName(e.target.value); console.log( " name:- ",e.target.value)}}/>
          <p> Password </p>
          <input type="password" id="passWord"   onChange={(e)=> {setPassWord(e.target.value); console.log( " password:- ",e.target.value)}}/>
           <button onClick={validateInput}>
             {/* <Link to='/'  className={LoginCss.link}>  */}
             Login 
             {/* </Link>  */}
              </button>  
          <button onClick={() => setShowPop(true)}>FORGOT PASSWORD ?</button>

          {showPop ? (
            <div className={LoginCss.popDiv}>
              <h2>
              <BsPatchCheck className={LoginCss.sentIcon} /> <br/>
                Recovery Password Sent.
              </h2>
              <p> Dear user, Kindly check your Email.</p>
              <button
                className={LoginCss.closetbtn}
                onClick={() => setShowPop(false)}
              >
                
                Close
                <AiOutlineCloseCircle className={LoginCss.closeIcon} />
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <Footer />
    </>
  );
};
