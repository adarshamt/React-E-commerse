
import './App.css';
import HomePage from './Components/HomePage';



import {  Routes,Route} from 'react-router-dom'
import Men from './Components/Men';

import Women from './Components/Women';



import Navbars from './Components/navbar';
import { useState } from 'react';
import { ProductsData } from './Components/Products/ProductData';
import Collection from './Components/Products/Collection';

import { Context } from './Components/Context';
import View from './Components/View';


function App() {

  const [products, setProducts]= useState(ProductsData) 

  const [cart, setCart]=useState([])

  const data = {
    products,
    setProducts,

    cart,
    setCart
  }

  return (
    <div>

      <Context.Provider value={data}>
   
       <Navbars/>

    

       <Routes>
       
       
         <Route path="/" element={<HomePage/>} />
         <Route path="/collection" element={<Collection/>} />

         <Route path="men" element={<Men/>} />
         <Route path="view" element={<view/>} />

         <Route path="women" element={<Women/>} />
         <Route path='/view/:id' element={ <View /> } />
         
       </Routes>

       </Context.Provider>
      
   </div>
    
  );
}

export default App;
