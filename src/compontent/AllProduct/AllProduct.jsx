import { useState } from 'react';
import './AllProduct.css'

const AllProduct = () => {
    const [products,setProducts] =useState([]);
    fetch('fakeData.json')
    .then(res =>res.json())
    .then(data =>{
        setProducts(data)
    })
    return (
        <div>
            <h1>All product :{products.length}</h1>
        </div>
    );
};

export default AllProduct;