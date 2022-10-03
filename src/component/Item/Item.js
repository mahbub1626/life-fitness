import React from 'react';
import './Item.css'

const Item = (props) => {
    // console.log(props)
    const { img, name, text, age, time } = props.gym;
    const { cart, setCart } = props;
    const handleCart = () => {
        if (cart) {
            const newTime = [...cart, time];
            setCart(newTime)

        }
        else{
            const newTime = [time];
            setCart(newTime);
        }
    }
    return (
        <div className='item'>
            <img src={img} alt="img" />
            <div className='item-text'>
                <h2>{name}</h2>
                <p>{text}</p>
                <p>For Age: {age}</p>
                <p>Time required: {time}s</p>
            </div>
            <button onClick={handleCart} className='bnt-add-to-list'>
                <p>Add to list</p>
            </button>

        </div>
    );
};

export default Item;