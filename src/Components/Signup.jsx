import React, { useContext, useRef } from 'react'

import './Signup.css'

import { Link, useNavigate } from 'react-router-dom'
import { Context } from './Context'


 const Signup = () => {

  const Navigate = useNavigate()
  const {signup,setSignup} = useContext(Context)
  const inpref = useRef()


  const signupHandler = () => {

    const name = inpref.current.name.value
    const email= inpref.current.email.value
    const password= inpref.current.password.value
    const phone = inpref.current.number.value

    setSignup([...signup,{name,password,email,phone}])

    // console.log(signup)
  Navigate('/login')

  }



  
  return (
    <div className='main_div'>

      <div className='form-div'>

     

    <form ref={inpref}  onSubmit={(e)=>{e.preventDefault()}} className='sign_form'>

         <label>Name </label>

            <input   type='text' placeholder='name' name='name'/>


            <label>Email </label>

           <input   type='Email' placeholder='Email' name='email'/>

           <label>Phone Number </label>

          <input   type='number' placeholder='Phone Number'  name='number'/>


         <label>Password </label>

       <input   type='text' placeholder='Password' name='password'/>


       <button onClick={signupHandler}  className='login'>Submit</button>

            <label>Already have account</label> <Link to='/login'> Login</Link>

     </form>

    </div>

    <div className='btns'>

      {/* <button onClick={()=>} className='signup'>Sign up</button> */}

     
    </div>



</div>
  )
}

export default Signup