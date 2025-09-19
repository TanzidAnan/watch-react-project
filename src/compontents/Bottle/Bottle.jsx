
import './Bottle.css'

const Bottle = ({bottle,heandleAddToCard}) => {
    console.log(bottle)
    const {name,img,price} =bottle
    return (
        <div className='bottle'>
            <h3>{name}</h3>
            <img src={img} alt="" />
            <h5>Price :{price}</h5>
            <button onClick={() =>heandleAddToCard(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;