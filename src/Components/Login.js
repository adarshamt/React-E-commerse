import React from 'react'

import './Login.css'
import { AiFillHome } from 'react-icons/ai'


import { useNavigate } from 'react-router-dom'


export const Login = () => {
  const link=useNavigate()
  
  return (
    <div className='main_div'>

      <div className='navbar'>

            <AiFillHome onClick={()=>link('/')}  />



      </div>

      <div className='form-div'>

     

    <form  className='registration_form'>

         {/* <label>Name </label>

            <input   type='text' placeholder='name'/> */}


            <label>Email </label>

           {/* <input   type='Email' placeholder='Email'/>

           <label>Phone Number </label> */}

          <input   type='number' placeholder='Phone Number'/>


         <label>Password </label>

       <input   type='text' placeholder='Password'/>

     </form>

    </div>

    <div className='btn'>

      <button className='signup'>Sign up</button>

      <button onClick={()=>link("/")} className='login'>Log in</button>


    </div>



</div>
  )
}
