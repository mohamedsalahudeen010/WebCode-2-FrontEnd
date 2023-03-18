import React from "react"
import {  useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Base from "../../Page/Base";
import AuthNavBar from "./NavAuth";


const ForgetPageUser=()=>{
   
    const history=useHistory();
    const [email,setEmail]=useState("");
   

    const addEmail= async (event)=>{
      event.preventDefault()
            try {
              console.log(email)
              const enteredEmail={
               email
              
              }
              console.log(enteredEmail)

              const response=await fetch("https://webcode-2-backend.vercel.app/api/forgetPassword",{
                method:"POST",
                body:JSON.stringify(enteredEmail),
                headers:{
                  "Content-Type":"application/json"
                }
              });
              const data=await response.json();
              console.log(data)
              history.push("/")
            } catch (error) {
              console.log("error",error)
            }
    
           
          }
   return(
    
   <div> 
   <AuthNavBar/>  
   <div className="main-logo">
      
      <img className="pizza-logo-left" src="https://img.freepik.com/premium-vector/pizza-logo-template-design-pizza-shop_7894-454.jpg?w=740" alt='Pizza_logo'/>
      <div><h3 className="title">Guvi Pizza Corner <img className="pizza-logo" src="https://static.vecteezy.com/system/resources/previews/001/208/696/original/chef-png.png" alt='Title-Logo'/></h3>
    
    </div>
      <img className="pizza-logo-right" src="https://irp.cdn-website.com/9608fb11/MOBILE/images/Hot-stuff-pizza.pngG8DB7EAjVUYpem2QUXqeCdfvqT8I16aJ" alt='Pizza_logo'/>
    </div>
    
    <div>
    <div>
            <form className="form">
                <div>
                   <input className="input" type="email"
                   placeholder="Enter Registered Email"
                     id="email" 
                     onChange={(e)=>setEmail(e.target.value)}
                     value={email}></input>
                </div>
                <div className="remember">
                <input type="checkbox" name="" id=""></input>
                   <label for="remember" className="remember_label">Remember password</label>
                   <button type="" className="login-btn" onClick={(e)=>{addEmail(e)}}>Enter</button>
                </div>
            </form>
        </div>
       
  <p>This site is protected by reCAPTCHA and the Google 
    <span><a href='https://policies.google.com/privacy' target={"_blank"}  rel={"noreferrer"}>Privacy Policy 
    </a></span>and <span><a href='https://policies.google.com/terms' target={"_blank"}  rel={"noreferrer"}>Terms of Condition </a></span> apply.</p>
    <hr></hr>
    <div className='footer_Newuser'>
      
       </div>
    </div>
    </div>
   
    )
}


export default ForgetPageUser