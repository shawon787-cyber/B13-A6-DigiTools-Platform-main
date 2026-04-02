import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Rating from './Components/Rating'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Started from './Components/Started'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
     <Navbar cart={cart}></Navbar>
     <Hero></Hero>
     <Rating></Rating>
     <Cart cart ={cart} setCart ={setCart}></Cart>
     <ToastContainer></ToastContainer>
     <Started></Started>
     <Pricing></Pricing>
     <Footer></Footer>
    </>
  )
}

export default App
