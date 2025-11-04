import React from 'react';

const Book = ({book}) => {
    const {bookId, bookName, author, imaage, review, rating, tags, publisher, yearOfPublishing, totalPages} = book
    return (
        <div>
            <h1>{book.bookId}</h1>
            <h1>{book.name}</h1>
        </div>
    );
};

export default Book;