
const SingleProduct = ({ product,handkeSelectedProduct }) => {
    // console.log(product);
    const { name, price, color, water_resistant, image, description, isFeatured } = product;
    return (
        <div className="">
            <div className="card bg-red-50 shadow-sm border-t-base-100 p-5 mb-5">
                <figure>
                    <img
                        src={image}
                        alt="watch" 
                        className="h-[200px] w-full"/>
                </figure>
                <div className="mt-4">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{isFeatured?"New": "Best"}</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-between mt-4 align-middle">
                        <div className="badge badge-outline text-lg font-bold text-green-600 py-3">Price: ${price}</div>
                        <div onClick={() =>handkeSelectedProduct(product)} className="btn bg-green-200">Add To Cart</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;