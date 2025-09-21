
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
  
  const [selectedProducts,setSelectedProducts]=useState([])

  const handkeSelectedProduct =(product) =>{
    console.log(product);
    const isExist =selectedProducts.find((p) =>p.id ===product.id);
    if(isExist){
      alert('ar add kora jabe na')
    }
    else{
      const newProduct =[...selectedProducts,product];
    setSelectedProducts(newProduct)
    }
    
  }
  console.log(selectedProducts)

  return (
    <>
      {/* Header section state */}
      <Header selectedProducts={selectedProducts}></Header>
      {/* Header section end */}
      <div className='flex w-10/12 mx-auto'>
        <AllProduct handkeSelectedProduct={handkeSelectedProduct}></AllProduct>
        <CartContainer handleIsActiveState={handleIsActiveState} isActive={isActive} selectedProducts={selectedProducts}></CartContainer>
      </div>
    </>
  )
}

export default App
