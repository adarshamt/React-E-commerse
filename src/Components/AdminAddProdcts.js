import React, { useContext, useRef } from 'react'
import { Context } from './Context'

import Button from 'react-bootstrap/Button';
import './AdminAddProducts.css'

const AdminAddProdcts = () => {


  const {products,setProducts} = useContext(Context)
  const inpref = useRef()

  const AddProductspHandler = () => {

    const id = inpref.current.id.value
    const title = inpref.current.title.value
    const price= inpref.current.price.value
    const img= inpref.current.image.value
    const type = inpref.current.type.value

    const qty=1

    setProducts([...products,{id,title,price,img,type,qty}])

  }

  return (
    <div>
     <div className='form-div' >

     

    <form ref={inpref}  onSubmit={(e)=>{e.preventDefault()}} className='add_form'>
        
    <label>Product id</label>

   <input   type='text' placeholder='Product id' name='id'/>

       <label>Product Name</label>

          <input   type='text' placeholder='Product Title' name='title'/>


           <label>Price </label>

       <input   type='number' placeholder='Price' name='price'/>

       <label>type </label>

      <input   type='text' placeholder='Product type'  name='type'/>


     <label>Image </label>

   <input   type='text' placeholder='Image url' name='image'/>

   <Button onClick={AddProductspHandler} variant="success">ADD</Button>{' '}
   {/* <button onClick={AddProductspHandler}  className='AddProduct'>ADD</button> */}


 </form>

</div>


    </div>
  )
}

export default AdminAddProdcts