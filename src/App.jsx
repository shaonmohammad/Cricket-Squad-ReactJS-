import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles

import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Players from './Components/Players/Players'
import Footer from './Components/Footer/Footer';

function App() {
  const [coin, setCoin] = useState(0)
  
  const handleCoin = () => {
    setCoin(coin + 100)
    
    toast.success("💰 Coin added successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }

  
  
  return (
    <>
       <ToastContainer />
      <div className='mx-0 my-5 md:mx-40 md:my-10'>
        <Navbar coin={coin}></Navbar>
        <Header handleCoin={handleCoin}></Header>
        <Players coin={coin} setCoin={setCoin}></Players>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
