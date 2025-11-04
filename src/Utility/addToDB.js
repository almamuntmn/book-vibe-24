const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        // Make sure we convert stored IDs to numbers
        return JSON.parse(storedBooks).map(id => Number(id));
    }
    return [];
};

const addToDB = (id) => {
    const storedBooks = getStoredBooks();
    id = Number(id); // ensure ID is a number
    if (storedBooks.includes(id)) {
        alert('Book already added');
        return;
    }
    storedBooks.push(id);
    localStorage.setItem('books', JSON.stringify(storedBooks));
}

export { addToDB, getStoredBooks };
