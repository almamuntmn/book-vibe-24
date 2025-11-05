import React from 'react';

const ListedBook = (book) => {
    console.log('book', book.book);

const { bookName, author, image, rating, tags, category, publisher, totalPages } = book.book

    return (
        <div className='flex items-center gap-5 border border-gray-200 rounded-2xl p-5 mb-6'>
            <div className='bg-gray-200 p-4 rounded-xl w-100'><img className='w-35 h-60 mx-auto' src={image} alt="" /></div>
            <div className='w-10/12'>
                <h2 className='text-4xl'>{bookName}</h2>
                <p>By: {author}</p>
                <p>{tags.map((tag, index) => <span key={index} className='mr-2 bg-gray-100 px-3 py-1 rounded text-green-500
                '>{tag}</span>)}</p>
                <p>{category}</p>
                <p>{rating}</p>
                <p>{publisher}</p>
                <p>{totalPages}</p>
                
            </div>
        </div>
    );
};

export default ListedBook;