import React from 'react';

const Watch = ({watch}) => {
    const {brand,model} =watch
    return (
        <div>
            <h1>watch: {brand}</h1>
            <h5>Price: {model}</h5>
        </div>
    );
};

export default Watch;