import React, { useContext } from 'react'
// import './AdminUser.css'


import userlogo from '../images/images.png'

import { Context } from './Context'
import { useNavigate } from 'react-router-dom'

const AdminUser = () => {

    const {signup} = useContext(Context)

    const Navigate = useNavigate()
  return (
   



     <div className='body_container1'>
      <div><h3>Registerd  User Details</h3></div>

         <div className='body_sub_container1' >
          

             {signup.map((item)=>(


                   <div className='item_ad' onClick={()=>Navigate(`/userDetails/${item.email}`)} >
                                                        
                     <div className='user_img'> <img src={userlogo} alt='no image found' /> </div>

                         <h5>
                          
                            {item.name} 

                        
                          </h5>
            
               </div>

          


                 ))} 
           </div>



         </div>

  )
}

export default AdminUser