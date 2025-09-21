import React from 'react';
import './CartContainer.css'

const CartContainer = ({handleIsActiveState}) => {
    return (
        <div>
            <h1>cart container</h1>
            <div className='flex'>
                <div>
                    <button onClick={() =>handleIsActiveState('cart')} className='btn btns'>Cart</button>
                </div>
                <div >
                    <button onClick={() =>handleIsActiveState('about')} className='btn btns'>About</button>
                </div>
            </div>
        </div>
    );
};

export default CartContainer;