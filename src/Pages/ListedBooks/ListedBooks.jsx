import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks } from '../../Utility/addToDB';
import ListedBook from './ListedBook';

const ListedBooks = () => {
    const data = useLoaderData() || [];

    const storedBooks = getStoredBooks(); // [1, 2]
    const readList = data.filter(book => storedBooks.includes(book.bookId));
    console.log(readList);

    return (
        <div className="w-11/12 mx-auto my-10">
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>My Read List ({readList.length})</h2>
                    {
                        readList.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)
                    }
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
