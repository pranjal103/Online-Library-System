import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import BookDetails from '../Components/BookDetails.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookList from '../Components/BookList.jsx'
import Home from '../Components/Home.jsx'
import AddBook from '../Components/AddBook.jsx'
import Error from '../Components/Error.jsx'


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/books",
        element: <BookList />
      },
      {
        path:"/books/:category",
        element: <BookList />
      },
      
      {
          path:"/add-book",
          element: <AddBook/>
      },
      {
          path:"/book/:id",
          element: <BookDetails />
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
