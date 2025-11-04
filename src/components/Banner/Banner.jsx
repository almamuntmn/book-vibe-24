import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex bg-gray-200 justify-between items-center p-10 rounded-2xl'>
            <div>
                <h1 className='text-6xl font-bold text-black'>Welcome to Book Vibe</h1>
                <button className='btn bg-green-600 text-white border-0'>Get Started</button>
            </div>
            <div><img className='rounded-2xl' src={bookImg} alt="" /></div>
        </div>
    );
};

export default Banner;