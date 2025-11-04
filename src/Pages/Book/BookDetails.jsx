import React from 'react';

const BookDetails = ({ book, handleRead }) => {
    const { bookName, author, image, rating, tags, category, review, publisher, totalPages, yearOfPublishing } = book


    return (
        <div className="bg-base-100 shadow-sm flex">
            <div className='bg-gray-300 rounded-2xl'>
                <figure>
                    <img className='p-15'
                        src={image}
                        alt="Shoes" />
                </figure>
            </div>
            <div className="card-body w-2/3">
                <h2 className="card-title">{bookName}</h2>
                <p>By: {author}</p>
                <hr />
                <p>{category}</p>
                <hr />
                <p>{review}</p>
                <p>{tags.map((tag, index) => <span key={index} className='mr-2 bg-gray-100 px-3 py-1 rounded text-green-500
                '>{tag}</span>)}</p>
                <hr />
                <div className='flex'>
                    <div>
                        <p className='font-light'>Number of pages:</p>
                        <p className='font-light'>Publisher:</p>
                        <p className='font-light'>Year of publisher:</p>
                        <p className='font-light'>Rating: </p>
                    </div>
                    <div className='ml-10'>
                        <p>{totalPages}</p>
                        <p> {publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <hr />
                <div className='flex gap-5'>
                    <button className='btn btn-outline' onClick={() => handleRead(book)}>Read</button>
                <button className='btn btn-success'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;