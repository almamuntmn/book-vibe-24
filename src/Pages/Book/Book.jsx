import React from 'react';
import { FaStar } from 'react-icons/fa';
import BookDetails from './BookDetails';

const Book = ({ book }) => {
    const { bookName, author, image, rating, tags, category } = book

    return (
        <div className="card bg-base-100 w-96 shadow-sm mx-auto border border-gray-200 p-5 rounded-xl " onClick={() => document.getElementById('my_modal_1').showModal()}>
            <figure className='bg-gray-200 p-4 rounded-xl'>
                <img className='w-40'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <p>{tags.map(tag => <span className='mr-2 bg-gray-100 px-3 py-1 rounded text-green-500
                '>{tag}</span>)}</p>
                <h2 className="card-title text-2xl">
                    {bookName}
                </h2>
                <p>By: {author}</p>
                <div className="divider mt-0"></div>
                <div className="card-actions justify-between">
                    <div>{category}</div>
                    <div className='flex items-center gap-1'>{rating}<span className='text-gray-400'><FaStar /></span></div>
                </div>
            </div>
            {/* Modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <BookDetails book={book}></BookDetails>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Book;