import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Rating from './Components/Rating'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
     <Navbar cart={cart}></Navbar>
     <Hero></Hero>
     <Rating></Rating>
     <Cart cart ={cart} setCart ={setCart}></Cart>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
