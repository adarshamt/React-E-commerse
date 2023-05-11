import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { BsCartFill, BsPersonCircle } from "react-icons/bs";

import {Link, useNavigate} from'react-router-dom'

import log1 from '../images/batalogo1.png' 
import { Button, Form } from 'react-bootstrap';

const Navbars= () => {

    const link =useNavigate()
  return (
  <>
   <div className='nabbar'>
        <div className='top-Notification'>
                   <p>Free Express shiping on all orders with all duties included</p>
                </div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className='contents'>
        <Navbar.Brand className='Company_name' href="#home"><img  src={log1} /> </Navbar.Brand>
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
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>

          <Nav className='rigth_content_icons'>
            <Nav.Link as={Link} to='/cart'><BsCartFill/></Nav.Link>
            <Nav.Link as={Link} to='/login' ><BsPersonCircle/></Nav.Link>
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>


  
  </>
  )
}

export default Navbars