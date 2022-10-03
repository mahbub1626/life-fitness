import React, { useState } from 'react';
import profile from '../../imges/mahbub.jpg'
import './Calculate.css'

const Calculate = ({ cart }) => {
const [time,setTime] = useState([])

    let numberArray = [];
    for (let i = 0; i < cart.length; i++) {
        // Instead of parseInt(), Number()
        // can also be used
        numberArray.push(parseInt(cart[i]));
    }
    console.log(numberArray);
    const sum = numberArray.reduce((a, b) => a + b, 0);

    const handleBreakTime = (event) => {
        const time = event.target.innerText;
        console.log(time);
        setTime(time)
    }

    return (
        <div className='caculate-part'>
            <div className='profile'>
                <div className='profile-img'>
                    <img src={profile} alt="img" />
                </div>
                <div className='profile-text'>
                    <h4>Mahbubur Rahman</h4>
                    <p>Sherpur, Bangladesh</p>
                </div>
            </div>
            <div className='profile-info'>
                <div className='profole-info-part'>
                    <h3>23</h3>
                    <p>age</p>
                </div>
                <div className='profole-info-part'>
                    <h3>50kg</h3>
                    <p>weight</p>
                </div>
                <div className='profole-info-part'>
                    <h3>75kg</h3>
                    <p>weight</p>
                </div>

            </div>
            <div className='bnt-container'>
                <h3>Add a Break</h3>
                <div className='all-btn'>
                    <button onClick={(event) => handleBreakTime(event)}>10s</button>
                    <button onClick={(event) => handleBreakTime(event)}>24s</button>
                    <button onClick={(event) => handleBreakTime(event)}>59s</button>
                    <button onClick={(event) => handleBreakTime(event)}>51s</button>
                    <button onClick={(event) => handleBreakTime(event)}>15s</button>
                </div>
            </div>
            <div className='ex-details'>
                <h3>Excercise Details</h3>
                <div>
                    <div className='ex-details-part'>
                        <p> Excersice Time: <span>{sum}s</span></p>
                    </div>
                    <div className='ex-details-part'>
                        <p> Excersice Breack Time:  <span>{time}</span></p>
                    </div>
                </div>
            </div>
            <div className='btn-activity'>
                <button>
                    <p>Activity Completed</p>
                </button>
            </div>
        </div>
    );
};

export default Calculate;