import React from 'react'
import { useState } from 'react'
import { menProducts } from './Components/Products/ProductData'

import { createContext } from 'react'

const Shopcontext=createContext(null) 

const defaultCart =()=>{
    let cart ={}

    for(let i=0;i<menProducts.length;i++){
   
   cart[i]=0;}
    return cart

}

export const ShopContext = (props) => {

    const[cartitms,setCartitms]=useState(defaultCart());

   const addtocart= (itmId)=>{

    setCartitms((prev)=>({...prev,[itmId]:prev[itmId]+1}))
   }

   const removeFromcart= (itmId)=>{

    setCartitms((prev)=>({...prev,[itmId]:prev[itmId]-1}))
   }

   const contextValue ={setCartitms,addtocart,removeFromcart}

  return (
    <ShopContext.provider value={contextValue }>
    {props.children}

    </ShopContext.provider>
  )
}

export default Shopcontext