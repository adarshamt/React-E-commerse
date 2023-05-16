import React, { useContext, useRef } from 'react'

import './Login.css'
import { AiFillHome } from 'react-icons/ai'


import { Link, useNavigate } from 'react-router-dom'
import { Context } from './Context'


export const Login = () => {

  const ipref = useRef(null)
  const link = useNavigate()

  const {signup,setAuth} =useContext(Context)
  

   const logvalidation = () =>{
  const email = ipref.current.email.value
  const password = ipref.current.password.value

  const validation = signup.filter((item)=> item.email === email && item.password === password )

  if (validation.length > 0){
    alert('Login successfully')
    setAuth(true)
    link('/')

  }
  else{

    alert('Wrong user details')
  }

}
  
  return (
    <div className='main_div'>

      <div className='nav_log'>

            <AiFillHome onClick={()=>link('/')}  />


      </div>

      <div className='form-div'>

     

    <form ref={ipref} onSubmit={(e)=>{e.preventDefault()}} className='registration_form'>

        


          <label>Email </label>
          <input   type='email' placeholder='Email' name='email' />

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
