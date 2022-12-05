import React from 'react';
import './BreakTime.css'

const BreakTime = (props) => {
    
    return (
        <div className='my-5'>
            <h3 className='text-green my-3'>Add A Break: </h3>
            <div onClick={props.addBreakTime} className='d-flex justify-content-center p-3 break-time mt-4 '>
                <button  className='break-btn rounded bg-white px-2 m-2 py-2'>20s</button>
                <button  className='break-btn rounded bg-white px-2 m-2 py-2'>30s</button>
                <button  className='break-btn rounded bg-white px-2 m-2 py-2'>10s</button>
                <button  className='break-btn rounded bg-white px-2 m-2 py-2'>40s</button>
                <button  className='break-btn rounded bg-white px-2 m-2 py-2'>50s</button>
            </div>
        </div>
    );
};

export default BreakTime;