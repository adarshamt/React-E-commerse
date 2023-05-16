import React from 'react'
import './AdminProducts.css'
import { NavItem } from 'react-bootstrap'

import { BiEdit } from 'react-icons/bi';

import { MdOutlineDeleteForever } from 'react-icons/md';
import { useContext } from 'react';
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';


const AdminProducts = () => {

   const Navigate =useNavigate()

    const {products,setProducts}=useContext(Context)

    const removitem = (id) =>{

      const newItems =products.filter((item)=>item.id != id)

     setProducts(newItems)
    }


  return (


   <div className='Product_main_container'> 

    <div className='product_sub_cont'>
        <div className='title_main'>

        <div className='titles'><p>Image</p></div>
        <div className='titles'><p>Name</p></div>
        <div className='titles'><p>Price</p></div>
        <div className='titles' ><p>Edit</p></div>
            

        </div>
        
         {products.map((item)=>(
            <div className='product_items'>

                <div> <img src={item.img} alt='No image found' />  </div>
                <div> <p>{item.title} </p>  </div>
                <div>  <p> ₹ {item.price}</p>    </div>
                <div style={{justifyContent:'space-evenly',padding:'2%'}}> <BiEdit onClick={()=>Navigate(`/productDetailsEdit/${item.id}`)}/> <MdOutlineDeleteForever onClick={()=>removitem(item.id)} /> </div> 



            </div>

       ))}


        </div>

    
    </div>
  )
}

export default AdminProducts