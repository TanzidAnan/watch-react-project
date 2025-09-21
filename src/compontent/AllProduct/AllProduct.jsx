import { useState } from 'react';
import './AllProduct.css'
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProduct = ({handkeSelectedProduct}) => {
    const [products,setProducts] =useState([]);
    fetch('fakeData.json')
    .then(res =>res.json())
    .then(data =>{
        setProducts(data)
    })
    return (
        <div>
            {/* <h1 className='text-2xl '>All product :{products.length}</h1> */}
            <div className='grid grid-cols-2 gap-[25px]'>
                {products.map((product) =><SingleProduct key={product.id} product={product} handkeSelectedProduct={handkeSelectedProduct} ></SingleProduct>)}
            </div>
        </div>
    );
};

export default AllProduct;