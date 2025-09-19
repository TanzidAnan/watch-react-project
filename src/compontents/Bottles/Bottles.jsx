import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = () => {

    const [bottles,setBottles] =useState([])

    useEffect(() =>{
        fetch('bottles.json')
        .then(res =>res.json())
        .then(data =>setBottles(data))
    },[])

    return (
        <div>
            <h5>Bottles Here {bottles.length}</h5>
            <div>
                {
                    bottles.map(bottle =><Bottle bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;