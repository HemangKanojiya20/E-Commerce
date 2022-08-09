import React,  { useEffect, useState } from 'react'
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Product from './Components/Product'; 
import Cart from './Components/Cart';
import {Routes, Route} from 'react-router-dom';
import {CartContext} from './CartContext';   

function App() {
  const [product, setProduct] = useState([]);

  const [cart, setCart] = useState({});

  useEffect(() =>{
      const cartProduct = window.localStorage.getItem('cart');

      setCart(JSON.parse(cartProduct));
  },[])


  //console.log(cart)
  useEffect(() =>{
      window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setProduct(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);

  //console.log(product);
  return (
          <div>
            <CartContext.Provider value={{cart,setCart}}>
                <Navbar/>
                <Routes>
                    <Route path = "/login" element = {<Login/>}/> 
                    <Route path = "/cart" element = {<Cart/>}/> 
                    <Route path = "/" element = {<Product prod = {product}/>}/> 
                </Routes>
                <Footer /> 
            </CartContext.Provider>
          </div> 
  )
}

export default App;