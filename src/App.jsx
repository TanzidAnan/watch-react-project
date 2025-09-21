
import { useState } from 'react'
import './App.css'
import AllProduct from './compontent/AllProduct/AllProduct'
import CartContainer from './compontent/CartContainer/CartContainer'
import Header from './compontent/Header/Header'

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: 'cart'
  });

  const handleIsActiveState = (status) => {
    if (status === 'cart') {
      setIsActive({
        cart: true,
        status: 'cart'
      })
    }
    else{
     setIsActive({
        cart: false,
        status: 'about'
      })
  }
  }
  

  console.log(isActive)

  return (
    <>
      {/* Header section state */}
      <Header></Header>
      {/* Header section end */}
      <div className='flex w-10/12 mx-auto'>
        <AllProduct></AllProduct>
        <CartContainer handleIsActiveState={handleIsActiveState}></CartContainer>
      </div>
    </>
  )
}

export default App
