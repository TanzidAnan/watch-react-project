
import './Bottle.css'

const Bottle = ({bottle}) => {
    console.log(bottle)
    const {name,img,price} =bottle
    return (
        <div className='bottle'>
            <h3>{name}</h3>
            <img src={img} alt="" />
            <h5>{price}</h5>
        </div>
    );
};

export default Bottle;