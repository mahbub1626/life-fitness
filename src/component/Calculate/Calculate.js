import React from 'react';
import profile from '../../imges/mahbub.jpg'
import './Calculate.css'

const Calculate = () => {
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
                    <h3>75kg</h3>
                    <p>weight</p>
                </div>
                <div className='profole-info-part'>
                    <h3>75kg</h3>
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
                    <button>10s</button>
                    <button>10s</button>
                    <button>10s</button>
                    <button>10s</button>
                    <button>10s</button>
                </div>
            </div>
            <div>
                <h2>Excercise Details</h2>
                <div>
                    <div>
                        <p> Excersice Time  <span>0</span></p>
                    </div>
                    <div>
                    <p> Excersice Breack Time  <span>0</span></p> 
                    </div>
                </div>
            </div>
            <div>
                <button>
                    <p>Activity</p>
                </button>
            </div>
        </div>
    );
};

export default Calculate;