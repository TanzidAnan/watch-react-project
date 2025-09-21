import React from 'react';
import ShowCart from '../ShowCart/ShowCart';

const Cart = ({selectedProducts,hendleRemoveItem}) => {
    return (
        <div>
            <h2>Cart{selectedProducts.length}</h2>
            <div>
                {selectedProducts.map(product => <ShowCart key={product.id} product={product} hendleRemoveItem={hendleRemoveItem}></ShowCart>)}
            </div>
            
        </div>
    );
};

export default Cart;