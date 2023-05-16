import React, { useContext } from 'react'
import { Context } from './Context'
import { useParams } from 'react-router-dom'


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { NavItem } from 'react-bootstrap';

const AdminUserDetails = () => {

      const {email} = useParams()
    const {signup} = useContext(Context)

    const data= signup.filter((item)=>item.email==email)

    {console.log(data)}


  return (
    <div className='main_dtls' style={{width:'80%',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2%'}}>
     {data.map((item)=>(

        
    <div className='sub_dtls' style={{width:'50%',height:'100%'}}>

<Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder={item.name} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="password" placeholder={item.email} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Phone number</Form.Label>
        <Form.Control placeholder={item.phone} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder={item.password} />
      </Form.Group>

 
    </Form>
        
        
        
        
        
        
        
    </div>





      ))} 






    </div>
  )
}

export default AdminUserDetails