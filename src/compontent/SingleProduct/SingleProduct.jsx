
const SingleProduct = ({product}) => {
    // console.log(product);
    const {name} =product;
    return (
        <div>
            <h3>single product {name}</h3>
        </div>
    );
};

export default SingleProduct;