import React from 'react'
import { ProductsData } from './Products/ProductData';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Men = () => {

  const Navigate = useNavigate()

  const data = ProductsData.filter((item)=>item.type ==='Men shoes')


  return (

    <div className='d-flex-column container'>
       
      <div className='row gap-5 '>                 

    {data.map((item)=>(


        <Card
        className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'
        style={{ width: '21.5rem' }}>
             <Card.Img  variant="top" src={item.img}/>
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

export default Men