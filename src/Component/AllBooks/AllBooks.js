import React from 'react';
import Book from '../Book/Book';
import BreakTime from '../BreakTime/BreakTime';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import Headder from '../Headder/Headder';
import User from '../User/User';
import { useState } from 'react';
import './AllBooks.css'

const AllBooks = (props) => {
    const [readingTime, setreadingTime] = useState(0);
    const [breaktime, setbreaktime] = useState(localStorage.getItem("Break Time"));
    const AddBreakTime = (event) =>{
        localStorage.setItem("Break Time", event.target.innerText);
        setbreaktime(event.target.innerText)
    }


    const books = props.books;
    const handleAddToList = (props) =>{
        const {time} = props;
        setreadingTime(parseInt(time) + readingTime);

        
    }
    
   
    return (
        <div className='row '>
        <div className='left-box col-md-8 col-lg-8 col-sm-12 '>
            <div className='container mt-5 ms-5'>
            <Headder></Headder>
            <h4 className='mt-3'>Select today's Books</h4>
            <div className='row g-3 mb-5'>
            {
                books.map(book => <Book Books={book} key={book.id} handleAddToList={handleAddToList}></Book>)
            }
            
            </div>
            </div>
        </div>
        <div className=' col-md-4 col-lg-4 col-sm-12'>
            <div className=' container p-5'>
            <User></User>
            <BreakTime addBreakTime={AddBreakTime}></BreakTime>
            <ExerciseDetails ReadingTime={readingTime} Notify={props.Notify} breakTime={breaktime}></ExerciseDetails>

            </div>
            
        </div>
    </div>
    );
};

export default AllBooks;