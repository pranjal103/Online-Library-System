import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { data } from "../src/assets/utils/MockData";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


function BookDetails() {
  const {id} = useParams();
  const [book, setBook] = useState(null);
  const addedBook = useSelector((state) => state.cart.items);

useEffect(() => {
    let books = [...data, ...addedBook];
    const foundBook = books.find((book) => book.id == id);
    setBook(foundBook);
}, [id]);

  return (
    (
      book && 
      <div className="book-details">
        <h3>{book.title}</h3>
        <img src={book.coverImage} alt={book.title} />
        <p>Author: {book.author}</p>
        <p>Description: {book.description}</p>
        <p>Rating: {book.rating}</p>
        <Link to={`/books`}><button>Back to Browse</button></Link>
    </div>
    )
  );
}


export default BookDetails;