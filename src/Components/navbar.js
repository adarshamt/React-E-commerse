import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BsCartFill, BsPersonCircle, BsSearch } from "react-icons/bs";

import { RiAdminFill } from "react-icons/ri";

import {Link, useNavigate} from'react-router-dom'

import log1 from '../images/batalogo1.png' 
import { Button, Form } from 'react-bootstrap';

import './Navbar.css'
import { Context } from './Context';

const Navbars= () => {

    const link =useNavigate()

    const {auth} =useContext(Context)
    const {setSearch}=useContext(Context)

    const logCheck= ()=>{
      
      link('/cart')

      
      // if(auth == true){
      

      //   link('/cart')
      // }else{

      //   alert(' Please Login')
      //   link('/login')
      // }
    }

    
    const searchHandle = (e) => {
    
      setSearch(e.target.value);
      link('/search');
  
    }
    
  return (
  <>
   <div  className='nabbar'>
        <div className='top-Notification'>
                   <p>Free Express shiping on all orders with all duties included</p>
                </div>
        <Navbar className='nav_main_cont' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container  className='contents'>
        <Navbar.Brand className='Company_name' href="#home"><img onClick={()=>link(`/`)}   src={log1} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}>
            <Nav.Link as={Link} to='/men' >MEN</Nav.Link>
            <Nav.Link  as={Link} to='/women'>WOMEN</Nav.Link>
            <Nav.Link  as={Link} to='/collection'>COLLECTIONS</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
            onChange={searchHandle}
            
              type="search"
              placeholder="Search "
              className="me-2"
              aria-label="Search"
            />
            {/* <Button  

            variant="outline-secondary">Search</Button> */}
          </Form>

          <Nav className='rigth_content_icons'>
            <div style={{display:"flex",width:"100px",justifyContent:'space-around'}}>

            <Nav.Link onClick={logCheck}><BsCartFill/></Nav.Link>
            <Nav.Link as={Link} to='/login' ><BsPersonCircle/></Nav.Link>
              
            </div>
              
            
          </Nav>

          <Nav.Link style={{color:'white',marginLeft:'5%'}}  as={Link} to='/admin' ><RiAdminFill/></Nav.Link>



        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>


  
  </>
  )
}

export default Navbars