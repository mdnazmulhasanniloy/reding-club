import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useState ,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ExerciseDetails.css';

const ExerciseDetails = (props) => {
    const newTime = parseInt(props.ReadingTime);
    
    

    return (
        <div className='my-5'>
            <h3 className='text-green my-3'>Exercise Details: </h3>
            <div className='d-flex justify-content-between align-items-center p-3 break-time mt-4 '>
                <h4>Exercise time</h4>
                <h5 >{newTime} seconds</h5>
            </div>
            <div className='d-flex justify-content-between align-items-center p-3 break-time mt-4 '>
                <h4>Break time</h4>
                <h5 >{props.breakTime}</h5>
            </div>
            <div className=' p-3 mt-4 d-flex justify-content-center align-items-center'>
               <button onClick={props.Notify} className='btn btn-primary py-3 px-5'>Activity Completed</button>
               <ToastContainer />
            </div>
        </div>
    );
};

export default ExerciseDetails;