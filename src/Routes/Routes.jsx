import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';
import PageToRead from '../Pages/PageToRead/PageToRead';
import BookDetails from '../Pages/Book/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "listed-books",
        loader: async () => {
          const res = await fetch('/bookData.json');
          const data = await res.json();
          return data; // return full list
        },
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "page-to-read",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "bookDetails/:bookId",
        loader: async ({ params }) => {
          const res = await fetch('/bookData.json');
          const data = await res.json();
          const book = data.find(b => b.bookId === parseInt(params.bookId));
          return book;
        },
        element: <BookDetails />,
      }
    ],
  },
]);