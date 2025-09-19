import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = () => {

    const [bottles,setBottles] =useState([])
    const [cart,setCart] =useState([]);

    const heandleAddToCard =(bottle) =>{
        const newCart =[...cart,bottle];
        setCart(newCart)
    }

    useEffect(() =>{
        fetch('bottles.json')
        .then(res =>res.json())
        .then(data =>setBottles(data))
    },[])

    return (
        <div>
            <h5>Bottles Here {bottles.length}</h5>
            <h3>Cart:{cart.length}</h3>
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