import React, { useContext } from 'react'

import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { TiDeleteOutline } from 'react-icons/ti';

import Button from 'react-bootstrap/Button'  

import empt from '../images/image_processing20201106-11709-18misc6.gif'



import './Cart.css'
import { Context } from './Context';

const Cart = () => {

  const {cart,setCart} = useContext(Context)

  let cartTotal = 0;




  const removeitem = (e)=> {

    const removeItmId = parseInt(e.target.id) 

    const newItems = cart.filter((item)=> item.id !== removeItmId)
    setCart(newItems);

    
}

//  *****************quantity change***************
const addQty = (id)=>{
   const newqty = cart.map(

    (item)=>  item.id == id  ? {...item, qty: item.qty+1,} :  item
  
  )

  setCart(newqty); 

}

const removeQty = (id)=>{

  const newqty = cart.map(
    (item)=>  item.id == id && item.qty >1 ? {...item, qty: item.qty-1  } :  item
  
  )

  setCart(newqty);

}
// ************************Quantity end***************************

 
  return (
    <div className='Main_container'>

      {cart.length==0? <div className='empty_img'><img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" /><h2 style={{textAlign:'center'}}>Cart is empty</h2></div>:<div  className='items'>



    {cart.map((item)=>(
      <>

         <p style={{display:'none'}}>{cartTotal += item.qty * item.price}</p>

        <div className='item' key={item.id} >

           <div className='image_container'>
            <img src={item.img} alt="" />
           </div>
            
            <div> <h5>{item.title}</h5></div>

            <div className='qty'>

               <FiPlus onClick={()=>addQty(item.id)} /> 

               <input  placeholder={item.qty}  style={{margin:'3%',textAlign:'center'}} type="text" />  
               
               <FiMinus onClick={()=>removeQty(item.id)} />
                
             </div>

             <p> ₹ {item.qty*item.price}</p>

             <Button variant="success">Buy now</Button>{' '}  


             <TiDeleteOutline style={{fontSize:'29px'}} id={item.id} onClick={removeitem} />
                

        </div>

     </>

               ))}
           
    </div>  

    
    }
          <div className='total'><h3>Cart Total :{cartTotal}</h3></div>
      
    </div>
  )
}

export default Cart