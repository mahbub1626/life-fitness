import React from 'react';
import './Item.css'

const Item = (props) => {
    // console.log(props)
    const {img,name,text, age, time}=props.gym;
    return (
        <div className='item'>
            <img src={img} alt="img" />
            <div className='item-text'>
            <h2>{name}</h2>
            <p>{text}</p>
            <p>For Age: {age}</p>
            <p>Time required: {time}</p>
            </div>
            <button onClick={() => props.handleAddToC(props.gym)} className='bnt-add-to-list'>
                <p>Add to list</p>
            </button>

        </div>
    );
};

export default Item;