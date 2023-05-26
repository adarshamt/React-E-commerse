import React from 'react'
import './HomePage.css'
import {useNavigate} from'react-router-dom'


import men1 from '../men_shoe_1.jpg'

import men3 from '../men_shoe_3.jpg'
import wmn1 from '../Women_shoe_1.jpg'
import wmn2 from '../Women_shoe_2.jpg'
import wmn3 from '../Women_shoe_3.jpg'
import wmn4 from '../Women_shoe_4.jpg'




import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';







const HomePage = () => {
  const link =useNavigate()
  return (
     
    <div className='main_container'style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} >
          {/* <div className='navbar' >
               <div className='top-Notification'>
                   <p>Free Express shiping on all orders with all duties included</p>
                </div>
               <div className='contents' > 

                   <div className='Company_name' >

                     <img  src={log1} /> 
                   </div>

                  <div className='catagory'>
                          <div className='left_catogry'>

                    
                              <a>MEN</a>
                              <a>WOMEN</a>

                          </div>

                    

                        <div className='Right_conents'> 
                          <div className='rigth_content_icons'>
                           <i class="fa-solid fa-cart-shopping"></i>
                           <i class="fa-solid fa-user"></i>
                           
                        
                           
                           </div>
                       </div>

                     </div>   



                 
                </div> 



        </div> */}
       

    
        <div  className='hompage_maindiv' >

          {/* ***************Caserol**************** */}

          <Carousel className='h-50'>
      <Carousel.Item>
        <img
          className="d-block w-100  "
          src='https://cdn.shopify.com/s/files/1/0567/9503/7849/files/website-banner-desktop-landscape.jpg?v=1635135138'        
          alt="No image found"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://cdn.shopify.com/s/files/1/0567/9503/7849/files/website-banner-desktop-landscape.jpg?v=1635135138'          
          alt="No image found"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src='https://cdn.shopify.com/s/files/1/0567/9503/7849/files/website-banner-desktop-landscape.jpg?v=1635135138' 
          alt="No image found"
        />

        {/* <Carousel.Caption>
           <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
 {/* *******************Casrole End*************  */}

             {/* <div className='hame_content'> */}

                   {/* <div className='home_conent_sub' > */}

                         {/* <div className='content_btn'>

                         <Button variant="secondary">SHOP FOR MEN</Button>{' '}
                         <Button variant="secondary">SHOP FOR WOMEN</Button>{' '}

                              

                          </div>

                          <div className='home_subdiv_contnt' >

                            <h2 style={{fontSize:"80px",fontFamily:'cursive',color:'yellow'}}>hot summer offer</h2>
                             
                            <Button  variant="warning">Offer....!</Button>{' '}
                          
                          </div> */}

                    {/* </div>  */}

             {/* </div> */}
     
        
        </div>

        {/* <div className='producets_container'>

            <div className='product_heading' >
                 <h2 style={{fontFamily:'sans-serif'}}>Product</h2>

            </div>

            <div className='products'>
              <div className='firstrow'>
                <div ><img  src={men1} className='img' /></div>
                <div><img src={men2} className='img' /></div>
                <div><img className='img' src={men3} /></div>
              </div>
              <div className='Secndrow'>
                <div><img className='img' src={wmn1} /></div>
                <div><img className='img' src={wmn2}  /></div>
                <div><img className='img' src={wmn3}  /></div>
            </div>
              


            </div>


        </div> */}

        <div className='products'style={{border:"none",transform:'scale'}}>
          <div className='first_row'>

            {/* ***********products******************** */}
        <><h3 style={{margin:'30px',textAlign:'center'}}>𝙥𝙧𝙤𝙙𝙪𝙘𝙩𝙨</h3></>
        
        <CardGroup>
      <Card className='card_main' onClick={()=>link(`/men`)}>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body className='card' >
          
          <img src={men1}/>
          <Card.Title>Men Running shoe</Card.Title>
          <Card.Text>
          ★★★★☆
          </Card.Text>
        </Card.Body>
        <Card.Footer className='product_footer'>
          <small className="text-muted">₹ 5999.00
           </small>
        </Card.Footer>
      </Card>
      <Card className='card_main'>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body className='card' onClick={()=>link(`/women`)}>
          <img src={wmn1} />
          <Card.Title>Women’s Peach</Card.Title>
          <Card.Text>
          ★★★☆☆
          </Card.Text>
        </Card.Body>
        <Card.Footer className='product_footer'>
          <small className="text-muted">₹ 8999.00 </small>
        </Card.Footer>
      </Card>
      <Card className='card_main'>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body className='card'onClick={()=>link(`/women`)}>
          <img src={wmn3} />
          <Card.Title>Women’s Blue Training</Card.Title>
          <Card.Text>
          ★★★★☆
          </Card.Text>
        </Card.Body>
        <Card.Footer className='product_footer'>
          <small className="text-muted">₹ 8999.00</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    </div>
{/* *********************************************************************** */}
     <div className='sec_row'>
    <CardGroup>
      <Card className='card_main' onClick={()=>link(`/men`)}>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body className='card'>
          <img src={men3} />
          <Card.Title>Men’s Green Running</Card.Title>
          <Card.Text>
          ★★★★★
          </Card.Text>
        </Card.Body>
        <Card.Footer className='product_footer' >
          <small className="text-muted">₹ 6999.00</small>
        </Card.Footer>
      </Card>
      <Card className='card_main'>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body  className='card'onClick={()=>link(`/women`)}>
          <img src={wmn4} />
          <Card.Title>Women’s Candy City Run</Card.Title>
          <Card.Text>
          ★★★★☆
          </Card.Text>
        </Card.Body>
        <Card.Footer className='product_footer'>
          <small className="text-muted"> ₹ 8999.00</small>
        </Card.Footer>
      </Card>
      <Card className='card_main'>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body className='card' onClick={()=>link(`/women`)}>
        <img src={wmn2} />
          <Card.Title>Women’s Tan Sneaker</Card.Title>
          <Card.Text>
          ★★★★☆
          </Card.Text>
        </Card.Body>
        <Card.Footer className='product_footer'>
          <small className="text-muted" >₹ 11999.00</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    </div>  
         

        </div>




    </div>

  
  

  

   
  )
}

export default HomePage