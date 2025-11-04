import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);

useEffect(() => {
    fetch('bookData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
}, [])

    return (
        <div>
            {
                books.map(book => <Book book={book} key={book.bookId}></Book>)
            }
        </div>
    );
};

export default Books;