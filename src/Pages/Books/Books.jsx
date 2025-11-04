import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import BookDetails from '../Book/BookDetails';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [read, setRead]=useState([])

    useEffect(() => {
        fetch('bookData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const openModal = (book) => {
        setSelectedBook(book);
        document.getElementById('my_modal_4').showModal();
    }

    const handleRead=(book)=>{
        const newRead=[...read,book]
        setRead(newRead);
        console.log(read);
    }
    return (
        <div>
            <h1 className='text-4xl text-center my-10'>All Books</h1>
            <div className='grid grid-cols-3 gap-5 w-11/12 mx-auto mb-20'>
                {
                    books.map(book => (
                        <div key={book.bookId} onClick={() => openModal(book)}>
                            <Book book={book}></Book>
                        </div>
                    ))
                }
            </div>
            {/* Modal */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    {
                        selectedBook && <BookDetails handleRead={handleRead} book={selectedBook}></BookDetails>
                    }
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

export default Books;