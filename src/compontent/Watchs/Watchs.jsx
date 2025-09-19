import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';

const Watchs = () => {

    const [watches,setWatches] =useState([]);

    useEffect(() =>{
        fetch('watches.json')
        .then(res =>res.json())
        .then(data =>setWatches(data))
    },[])

    return (
        <div>
            {
                watches.map(watch =><Watch watch={watch}></Watch>)
            }
        </div>
    );
};

export default Watchs;