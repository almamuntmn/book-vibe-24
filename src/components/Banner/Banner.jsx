import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex bg-gray-200 justify-between items-center p-20 rounded-2xl w-11/12 mx-auto'>
            <div>
                <h1 className='text-6xl font-bold text-black mb-5'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-green-500 text-white border-0'>Get Started</button>
            </div>
            <div><img className='rounded-2xl' src={bookImg} alt="" /></div>
        </div>
    );
};

export default Banner;