import React from 'react';
import './Book.css'

const Book = ({Books, handleAddToList}) => {
    const { name, img, time} =Books;
    
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
        <div className='card p-3' >
            <img src={img} className=' img card-img-top img-fluid' alt={name}/>
            <div className='card-body'>
                <h4 className='card-title'><strong> Name: {name}</strong></h4>
                <h5 className='mt-3'><small>Readding Time: {time} minits</small> </h5>
                <button onClick={()=>handleAddToList(Books)} className='btn btn-primary mt-2'>Add to list</button>
            </div>
        </div>
    </div>
    );
};

export default Book;