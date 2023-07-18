import React, { useContext } from 'react'
// import './AdminUser.css'


import userlogo from '../images/images.png'

// import { Context } from './Context'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const AdminUser = () => {

    // const {signup} = useContext(Context)

    const Navigate = useNavigate()
       
    const [users,setUsers] = useState([])

    const datafetching= async()=>{
      try {
      const response= await  axios.get(`http://localhost:4001/admin/users`)
  
      // const setdata = productRes.data

      const usrlist = response.data.usersList
       console.log("user list response",usrlist)
           setUsers(usrlist)            
      } catch (error) {
        console.log(error,'heloooo')
        
      }
  }
  
     useEffect(()=>{
     
      datafetching()
  
     },[])


  return (
   



     <div className='body_container1' style={{width:'50%'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} ><h3  >Registerd  User Details</h3></div>

         <div className='body_sub_container1' >
          

             {users.map((item)=>(


                   <div className='item_ad' style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'5%'}} onClick={()=>Navigate(`/userDetails/${item.email}`)} >
                                                        
                     <div className='user_img'> <img src={userlogo} alt='no image found' /> </div>

                         <h5>
                          
                            {item.username} 

                        
                          </h5>
            
               </div>

          


                 ))} 
           </div>



         </div>

  )
}

export default AdminUser