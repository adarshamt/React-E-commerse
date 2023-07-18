import React, { useContext, useEffect, useState } from 'react'
// import { Context } from '../Context';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


  const Collection = () => {

    const Navigate = useNavigate()
    
<<<<<<< HEAD
  //  const {products} = useContext(Context)
=======
    // const {products} = useContext(Context)
>>>>>>> 4379bfbba0ba967895a2760c65269641dfd4bf35

  const [products,setProducts] = useState([])

  const datafetching= async()=>{
    try {
<<<<<<< HEAD
    const productRes = await  axios.get(`http://localhost:4001/users/products`)

    // const setdata = productRes.data
     console.log("set data",productRes)
=======
    const productRes= await  axios.get(`http://localhost:4001/users/products`)
    // const setdata = productRes.data
    console.log("set data adarsh jhjhjh",setdata)
>>>>>>> 4379bfbba0ba967895a2760c65269641dfd4bf35
         setProducts(productRes.data)            
    } catch (error) {
      console.log(error,'heloooo')
      
    }
}

   useEffect(()=>{
   
    datafetching()

   },[])

   console.log(products)


  return (
  
   

    <div className='d-flex-column container' style={{marginTop:'2%'}}>
       
      <div className='row gap-5 '>                 

    {products.map((item)=>(


        <Card key={item.id}
          className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'
          style={{ width: '21.5rem' }}>
             <Card.Img  variant="top" src={item.img} />
            <Card.Body>
               <Card.Title>{item.title}</Card.Title>
            <Card.Text> Price ₹ {item.price} </Card.Text>

              <Button onClick={()=>Navigate(`/view/${item.id}`)} >View Product</Button> 
  
  
          </Card.Body>
         </Card>

    ))}
             




       </div>
    </div> 

    
    
  
   
  )
}

export default Collection