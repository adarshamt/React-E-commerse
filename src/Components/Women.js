import { useContext } from "react"
import { Button, Card } from "react-bootstrap"
// import { ProductsData } from "./Products/ProductData"
import { useNavigate } from "react-router-dom"
import { Context } from "./Context"






const Women = () => {
  const Navigate = useNavigate()

  const {products} = useContext(Context)




  const data = products.filter((item)=>item.type ==='Women shoes')


  return (

    <div className='d-flex-column container' style={{marginTop:'2%'}}>
       
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

export default Women