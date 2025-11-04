import React from 'react';
import { useLoaderData } from 'react-router';
import { addToDB } from '../../Utility/addToDB';


const BookDetails = () => {

const book = useLoaderData();
const {bookId, bookName, author, image, rating, tags, category, review, publisher, totalPages, yearOfPublishing } = book;

const handMarkAsRead = (id) => {
    addToDB(id);

}

    return (
        <div className="bg-base-100 shadow-sm flex w-9/12 mx-auto mb-10">
            <div className='bg-gray-300 rounded-2xl'>
                <figure>
                    <img className='p-15'
                        src={image}
                        alt="Shoes" />
                </figure>
            </div>
            <div className="w-2/3 ml-8">
                <h2 className="card-title">{bookName}</h2>
                <p className='mb-4'>By: {author}</p>
                <hr className='mb-4' />
                <p className='mb-4'>{category}</p>
                <hr className='mb-4' />
                <p className='mb-4'>{review}</p>
                <p className='mb-4'>{tags.map((tag, index) => <span key={index} className='mr-2 bg-gray-100 px-3 py-1 rounded text-green-500
                '>{tag}</span>)}</p>
                <hr className='mb-4' />
                <div className='flex mb-4'>
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
                <hr className='mb-4' />
                <div className='flex gap-5'>
                    <button className='btn btn-outline' onClick={() => handMarkAsRead(bookId)}>Mark as Read</button>
                <button className='btn btn-success'>Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;