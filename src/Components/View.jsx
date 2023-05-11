import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsData } from './Products/ProductData'
import { Button, Card } from 'react-bootstrap'
import { Context } from './Context'


const View = () => {

  const {cart,setCart} = useContext(Context)
  const {id} = useParams()
  const data= ProductsData.filter((item)=>item.id==id)

  const MyCart = () =>  (
    // const [Newdata] = data

   <></>

  )

  return (
    <div className='main'> 

    {data.map((item)=>(

<Card 
className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'
style={{ width: '21.5rem' }}>
   <Card.Img  variant="top" src={item.img} />
  <Card.Body>
     <Card.Title>{item.title}</Card.Title>
  <Card.Text> Price: ₹ {item.price} </Card.Text>

    <Button onClick={MyCart}>Add to Cart</Button> 


</Card.Body>
</Card>




    ))} 

      

      




      
        {/* <h1>{ProductsData[id-1].title}</h1>
        <img src={ProductsData[id-1].img} /> */}
    </div>
  )
}

export default View