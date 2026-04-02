import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Rating from './Components/Rating'

function App() {
  const [cart, setCart] = useState([]);
//  console.log(cart)

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <Rating></Rating>
     <Cart cart ={cart} setCart ={setCart}></Cart>
    </>
  )
}

export default App
