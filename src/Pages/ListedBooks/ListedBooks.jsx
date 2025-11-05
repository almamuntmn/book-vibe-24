import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks } from '../../Utility/addToDB';
import ListedBook from './ListedBook';
import { useState, useEffect, useMemo } from 'react';

const ListedBooks = () => {
  const data = useLoaderData() || [];
  const [sort, setSort] = useState('');
  const [readList, setReadList] = useState([]);

  // ✅ Only get storedBooks once (memoized)
  const storedBooks = useMemo(() => getStoredBooks(), []);

  useEffect(() => {
    const read = data.filter(book => storedBooks.includes(book.bookId));
    setReadList(read);
  }, [data, storedBooks]); // Now safe – storedBooks won’t change

  const handleSort = (type) => {
    setSort(type);
    let sortedList = [...readList]; // copy to avoid mutating

    if (type === 'pages') {
      sortedList.sort((a, b) => b.totalPages - a.totalPages);
    } else if (type === 'ratings') {
      sortedList.sort((a, b) => b.rating - a.rating);
    }

    setReadList(sortedList);
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <details className="dropdown mb-4">
        <summary className="btn m-1">Sort By: {sort ? sort : 'None'}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li><a onClick={() => handleSort('pages')}>Total Pages</a></li>
          <li><a onClick={() => handleSort('ratings')}>Ratings</a></li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="font-semibold text-lg mb-3">
            My Read List ({readList.length})
          </h2>

          {readList.length > 0 ? (
            readList.map(book => (
              <ListedBook key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-gray-500 mt-6 text-center">
              No books in your read list yet.
            </p>
          )}
        </TabPanel>

        <TabPanel>
          <h2>My Wish List</h2>
          <p className="text-gray-500 mt-6 text-center">Coming soon...</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
