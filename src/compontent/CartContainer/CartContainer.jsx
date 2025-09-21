import React from 'react';
import './CartContainer.css'

const CartContainer = ({handleIsActiveState,isActive}) => {
    console.log(isActive)
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
        </div>
    );
};

export default CartContainer;