import React, { useContext, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
// import {care,toys,dress} from "./Datas"
import { Button } from 'react-bootstrap'
// import { useContext } from 'react';
import { Context } from './Context';



const AdminEditProducts = () => {

    const navigate = useNavigate()

     const {products} = useContext(Context)

    const {id}= useParams()
  
    const newPdrt =products.filter((item)=>item.id ==id)

     const [edit,setEdit] =useState(newPdrt[0]) 


     const editHandler = (e) =>{
      
        const name=e.target.name;
        const value=e.target.value;

        setEdit((prev)=>{
            return({...prev,[name]:value});
        });
      
       
     }

     const confirmEdit = (id)=>{

        const itemIndex= products.findIndex(item => item.id === id)

        products[itemIndex]=edit;

        // alert('Product Edited')

        // link('/collection')

         

     }

    //  (e) => e.preventDefault()

     const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/')
    
        
     }
    {console.log(id)}
  return (
      <div>
    <div className='form-div' >

    

   <form   onSubmit={handleSubmit} className='add_form'>
       
   <label>Product id</label>

  <input  value={edit.id}  type='text' onChange={editHandler} placeholder='Product id' name='id'/>

      <label>Product Name</label>

         <input value={edit.title}  type='text' onChange={editHandler} placeholder='Product Title' name='title'/>


          <label>Price </label>

      <input value={edit.price}  type='number' onChange={editHandler} placeholder='Price' name='price'/>

      <label>type </label>

     <input value={edit.type}   type='text' onChange={editHandler} placeholder='Product type'  name='type'/>


    <label>Image </label>

  <input value={edit.img}   type='text' onChange={editHandler} placeholder='Image url' name='image'/>

  <Button onClick={confirmEdit(edit.id)}  variant="success">ADD</Button>{' '}
   {/* <button onClick={AddProductspHandler}  className='AddProduct'>ADD</button>  */}


</form>

</div>

</div>
  )
}

export default AdminEditProducts