import { useState } from 'react';
import './AllProduct.css'
import SingleProduct from '../SingleProduct/SingleProduct';

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
            <div>
                {products.map((product) =><SingleProduct key={product.id} product={product} ></SingleProduct>)}
            </div>
        </div>
    );
};

export default AllProduct;