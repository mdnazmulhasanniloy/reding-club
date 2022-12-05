import React from 'react';
import './User.css'

const User = () => {
    return (
        <div className='d-flex mt-5'>
            <img className='user-image img card-img-top img-fluid shadow-lg' src='https://dev-mdnazmulhasanniloy.pantheonsite.io/wp-content/uploads/2022/04/Asha-Studio_ccexpress.png' alt='User Image'></img>
            <div className='ms-5'>
                <h2>MD Nazmul Hasan</h2>
                <p><i className='fa-regular fa-location-dot'></i> Cumilla, Bangladesh</p>
            </div>
            
        </div>
    );
};

export default User;