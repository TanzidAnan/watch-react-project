import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToLs, getStoredCart, removeFromLs } from '../../Utlites/localStroage';
import Cart from '../cart/Cart';

const Bottles = () => {

    const [bottles,setBottles] =useState([])
    const [cart,setCart] =useState([]);

    const heandleAddToCard =(bottle) =>{
        const newCart =[...cart,bottle];
        setCart(newCart)
        addToLs(bottle.id)
    }

    useEffect(() =>{
        fetch('bottles.json')
        .then(res =>res.json())
        .then(data =>setBottles(data))
    },[])

    useEffect(() =>{
        
        if(bottles.length>0){
            const storedCart= getStoredCart();
            console.log(storedCart,bottles);
            const saveCart =[];
            for(const id of storedCart){
                const bottle =bottles.find(bottle => bottle.id ===id);
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            console.log(saveCart);
            setCart(saveCart)
        }
    },[bottles]);

    const handleRemoveFromCart =(id) =>{
        const remainingCart =cart.filter(bottle =>bottle.id !==id);
        setCart(remainingCart)
        // Visual cart remove
        removeFromLs(id)
    }

    return (
        <div>
            <h5>Bottles Here {bottles.length}</h5>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className='bottles-container'>
                {
                    bottles.map(bottle =><Bottle
                        heandleAddToCard={heandleAddToCard}
                        bottle={bottle}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;