import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductsData } from './Products/ProductData'
import { Button, Card } from 'react-bootstrap'
import { Context } from './Context'

import styled from "styled-components";



const Main_Container = styled.div`
    height: 80vh;
    /* background-color: #dde7e7; */

    padding: 2rem;
    display: flex;
    align-items: center;

    justify-content: center;
`;

const Cont_1 = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    /* background-color: lightcoral ; */
`;

const Left_Cont = styled.div`
    width: 55%;
    /* background-color: lightblue; */
    padding: 2rem;
`;

const Left_Cont_1 = styled.div`
    /* background-color: beige; */
    height: 100%;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Right_Cont = styled.div`
    width: 45%;
    padding: 4rem 1rem 4rem;
`;

const Right_Cont_1 = styled.div`
    height: 100%;
    width: 100%;
    padding: 1rem;
    /* background-color: #705454; */
    text-align: left;
    letter-spacing: 1px;
    object-fit: contain;
`;



const View = () => {

  const {cart,setCart} = useContext(Context)
  const {id} = useParams()

// ****************ALTERNATE METHOD FOR PASSING THE PRODUCTS********************

  // const {img,type,title,price,qty}= ProductsData[id-1]
  // console.log(type,img,title,price,qty,"destructured");



  const data = ProductsData.filter((item)=>item.id==id)

  const Navigate = useNavigate()
  
  const {auth} =useContext(Context)

  const MyCart = () =>  {
   
    const [Newdata] = data

    

    if(auth === true){
     
           const cartproduct = cart.filter((item)=>item.id===id) 

              if(cartproduct.length>0){
    
    
              return alert("Product alredy exist")
      
            }else{
             setCart(prevState => [...prevState, Newdata])

              alert("product added to cart")
      Navigate('./cart')
         }

    }
    else{

        alert('Please login')
      Navigate('/login')
    
      }
  }


  return (




    <Main_Container>
            {data.map((item) => (
                <Cont_1 key={item.id}>
                    <Left_Cont>
                        <Left_Cont_1>
                            <img style={{ height: "100%" }} src={item.img} alt='no image found'/>
                        </Left_Cont_1>
                    </Left_Cont>
                    <Right_Cont>
                        <Right_Cont_1>
                            <h1>{item.title}</h1>
                            <h3>₹ {item.price}</h3>

                            <div>
                                {/* <button className="btns" onClick={MyCart}>
                                    Add To Cart
                                </button> */}
                                  <Button variant="success" onClick={MyCart}>Add to cart</Button>{' '}  
                            </div>
                        </Right_Cont_1>
                    </Right_Cont>
                </Cont_1>
            ))}
        </Main_Container>
//     <div className='main' style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'2%'}}> 

//     {data.map((item)=>(

//       <>  
// {/* 
// <Card 
// className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'
// style={{ width: '21.5rem' ,display:'flex'}}>
//    <Card.Img  variant="top" src={item.img} />
//   <Card.Body>
//      <Card.Title>{item.title}</Card.Title>
//   <Card.Text> Price: ₹ {item.price} </Card.Text>

//     <Button onClick={MyCart}>Add to Cart</Button> 


// </Card.Body>
// </Card> */}


// </>


    // ))} 
     
    // </div>
  )
}

export default View