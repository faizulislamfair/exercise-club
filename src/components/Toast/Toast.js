import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toast.css';

const Toast = () => {

    const notify = () => toast("Congratulations, you're done with your activity!");


    return (
        <div className='toast'>
            <button onClick={notify}>Activity Completed</button>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default Toast;