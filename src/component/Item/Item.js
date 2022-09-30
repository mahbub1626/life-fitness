import React from 'react';
import './Item.css'

const Item = (props) => {
    // console.log(props.gym)
    const {img,name,about, age, time}=props.gym;
    return (
        <div className='item'>
            <img src={img} alt="img" />
            <div>
            <h2>{name}</h2>
            <p>{about}</p>
            <p>For Age: {age}</p>
            <p>Time required: {time}</p>
            </div>
            <button>
                <p>Add to list</p>
            </button>

        </div>
    );
};

export default Item;