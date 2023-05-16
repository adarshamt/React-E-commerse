
import './App.css';
import HomePage from './Components/HomePage';



import { Routes, Route } from 'react-router-dom'
import Men from './Components/Men';

import Women from './Components/Women';

import Cart from './Components/Cart';





import Navbars from './Components/navbar';
import { useState } from 'react';
import { ProductsData } from './Components/Products/ProductData';
import Collection from './Components/Products/Collection';

import { Context } from './Components/Context';
import View from './Components/View';
import { Login } from './Components/Login';

import Signup from './Components/Signup';
import { Admin } from './Components/Admin';
import AdminUser from './Components/AdminUser';
import AdminProducts from './Components/AdminProducts';
import Search from './Components/Search';
import AdminUserDetails from './Components/AdminUserDetails';
import AdminEditProducts from './Components/AdminEditProducts';



function App() {

  const [products, setProducts] = useState(ProductsData)

  const [cart, setCart] = useState([])

  const [signup, setSignup] = useState([])

  const [auth, setAuth] = useState(false)

  const [search, setSearch] = useState()

  const data = {
    products,
    setProducts,

    cart,
    setCart,

    signup,
    setSignup,

    auth,
    setAuth,

    search,
    setSearch
  }

  return (
    <div>

      <Context.Provider value={data}>

        <Navbars />



        <Routes>


          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<Collection />} />

          <Route path="/men" element={<Men />} />

          <Route path="/women" element={<Women />} />

          <Route path="/cart" element={<Cart />} />


          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path='/view/:id' element={<View />} />

          <Route path='/admin' element={<Admin />} />

          <Route path='/adminUser' element={<AdminUser />} />

          {/* <Route path='/search' element={<Search />} /> */}

          <Route path='/search' element={<Search />} />

          <Route path='/userDetails/:email' element={<AdminUserDetails />} />

          <Route path='/productDetailsEdit/:id' element={<AdminEditProducts />} />



          {/* <Route path='/adminProducts' element={ <AdminProducts/> } /> */}


        </Routes>

      </Context.Provider>

    </div>

  );
}

export default App;
