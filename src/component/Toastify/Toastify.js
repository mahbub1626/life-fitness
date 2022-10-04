import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toastify.css'
const Toastify = () => {
    const notify = () => {
        toast.success("Activity Completed!", {
            position: "top-center"
        });
    }


    return (
        <div className='btn-toasty-container' >
            <button className='btn-toasty' onClick={notify}>Activity</button>
            <ToastContainer/>
        </div>
    );
};

export default Toastify;