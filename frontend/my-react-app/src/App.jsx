import React from 'react'

import daisy from 'daisyui'
import Home from './pages/Home.jsx';
import ProductDes from './pages/ProductDes.jsx';
import Cart from "./pages/Cart.jsx"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
 
  const register = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8080/getdata', {name: username, password: password}); 
      console.log(response.data);
    }catch (error) {
      console.error(error);
    }
  }

  return (
  
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDes />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
