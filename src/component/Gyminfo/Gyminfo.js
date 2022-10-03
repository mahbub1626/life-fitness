import logo from '../../logo.png'
import React, { useEffect, useState } from 'react';
import Calculate from '../Calculate/Calculate';
import Item from '../Item/Item';
import './Gyminfo.css'

const Gyminfo = () => {
    const [gymData, setGymData] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGymData(data))
    }, [])

    // console.log(cart);
    return (
        <div className='gym-container'>
            <div className='gym-items-container'>
                <div className='logo-part'>
                    <img src={logo} alt="logo" /> <h3>Life Fitness</h3>
                </div>
                <h3>
                    <p>Select today`s exercise</p>
                </h3>
                <div className="gym-item-container">
                    {
                        gymData.map(gym => <Item
                            key={gym.id}
                            gym={gym}

                            cart={cart}
                            setCart={setCart}
                        ></Item>)
                    }
                </div>
            </div>
            <div className="gym-calculate-container">
                <Calculate
                    cart={cart}
                    setCart={setCart}
                ></Calculate>
            </div>
        </div>
    );
};

export default Gyminfo;