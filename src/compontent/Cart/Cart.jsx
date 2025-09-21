import React from 'react';
import ShowCart from '../ShowCart/ShowCart';

const Cart = ({selectedProducts}) => {
    return (
        <div>
            <h2>Cart{selectedProducts.length}</h2>
            <div>
                {selectedProducts.map(product => <ShowCart product={product}></ShowCart>)}
            </div>
            
        </div>
    );
};

export default Cart;