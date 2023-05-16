
import React, { useContext } from 'react'
import { Context } from './Context';
import { Card } from 'react-bootstrap';

const Search = () => {

    const {products, search} = useContext(Context)
  return (
    <div style={{marginTop:'2%'}}>
  
      <div className='d-flex-column container'>
        <div className='row gap-5' >

          {products.filter((val) => {

        if(search ===" "){
          return val;
        }
        else if(val.title.toLowerCase().includes(search.toLowerCase())){
          return val;
        }else{
          return false;
        }

      })
    
      .map((item)=>(

        <Card
        className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" 
        style={{ width: '21.5rem' }}
        >
          <Card.Img variant='top' src={item.img}/>
          <Card.Body style={{textAlign: 'center'}}>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.type}</Card.Text> 
            <h6>Price: ₹ {item.price}</h6>
          </Card.Body>
        </Card>

      ))

      }
        </div>
      </div>
    </div>
  
  )
}

export default Search