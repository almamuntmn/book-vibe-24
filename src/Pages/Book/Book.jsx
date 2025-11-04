import { FaStar } from 'react-icons/fa';


const Book = ({ book }) => {
    const { bookName, author, image, rating, tags, category } = book

    

    return (
        <div className="card bg-base-100 w-96 h-130 shadow-sm mx-auto border border-gray-200 p-5 rounded-xl">
            <figure className='bg-gray-200 p-4 rounded-xl'>
                <img className='w-40'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <p>{tags.map((tag, index) => <span key={index} className='mr-2 bg-gray-100 px-3 py-1 rounded text-green-500
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
        </div>
    );
};

export default Book;