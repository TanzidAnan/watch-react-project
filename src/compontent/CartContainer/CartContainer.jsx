import React from 'react';
import './CartContainer.css'
import Cart from '../Cart/Cart';
import About from '../About/About';

const CartContainer = ({handleIsActiveState,isActive,selectedProducts,hendleRemoveItem}) => {
    return (
        <div>
            <h1>cart container</h1>
            <div className='flex'>
                <div>
                    <button onClick={() =>handleIsActiveState('cart')} className={`${isActive.cart?'btn active':'btn'}`}>Cart</button>
                </div>
                <div >
                    <button onClick={() =>handleIsActiveState('about')} className={`${isActive.cart?'btn ':'btn active'}`}>About</button>
                </div>
            </div>

            <div>
                {isActive.cart?<Cart selectedProducts={selectedProducts} hendleRemoveItem={hendleRemoveItem} ></Cart> :<About></About>}
            </div>

        </div>
    );
};

export default CartContainer;