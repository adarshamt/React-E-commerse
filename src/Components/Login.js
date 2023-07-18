import React, { useContext, useRef } from 'react'

import './Login.css'
import { AiFillHome } from 'react-icons/ai'


import { Link, useNavigate } from 'react-router-dom'
import { Context } from './Context'

import axios from 'axios'


export const Login = () => {

  const ipref = useRef(null)
  const link = useNavigate()

  // const {signup,setAuth} =useContext(Context)
  

   const logvalidation =async() =>{
  const username = ipref.current.username.value
  const password = ipref.current.password.value

  // const validation = signup.filter((item)=> item.email === email && item.password === password )

  const passitms ={

    username : username,
    password : password
   }



  try{

  

 const response=await axios.post(
  "http://localhost:4001/users/login",passitms)
  // .then(response=>console.log(response.data))
  // .catch(err=> console.log(err))
   const data= response.data.data;

   if(data){
   localStorage.setItem("token", data.token);

   console.log("data", data.token)
   if(!data){

    alert("wrong credentials")
   }

   }
}

catch (err){
 console.log("error",err)
}
   }
  
  return (
    <div className='main_div'>

      <div className='nav_log'>

            <AiFillHome onClick={()=>link('/')}  />


      </div>

      <div className='form-div'>

     

    <form ref={ipref} onSubmit={(e)=>{e.preventDefault()}} className='registration_form'>

        


          <label>Username </label>
          <input   type='text' placeholder='Username' name='username' />

             <label>Password </label>
            <input   type='text' placeholder='Password' name='password'/> 

                <button onClick={logvalidation} className='login'>Log in</button>
               <label>Don't have account</label><Link to='/signup'> Register here</Link>
     </form>

    </div>

    <div className='btns'>

      {/* <button className='signup'>Sign up</button> */}

     

     

    </div>
   


</div>
  )
}
