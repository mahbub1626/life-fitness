import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Gyminfo.css'

const Gyminfo = () => {
    const [gymData, setGymData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGymData(data))
    }, [])

    return (
        <div className='gym-container'>
            <div >
                <h2>
                    <p>Select today`s exercise</p>
                </h2>
                <div className="gym-item-container">
                {
                    gymData.map(gym => <Item
                        key={gym.id}
                        gym={gym}
                    ></Item>)
                }
                </div>
            </div>
            <div className="gym-calculate-container">
                <h2>This is calculator Container</h2>
            </div>
        </div>
    );
};

export default Gyminfo;