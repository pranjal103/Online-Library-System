import { data } from "../src/assets/utils/MockData";
import Book from "./Book";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


function BookList() {
    const { category } = useParams();
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [searchText, setSearchText] = useState("");
    const addedBook = useSelector((state) => state.cart.items);
    useEffect(() => {
        let books = [...data, ...addedBook];
        if (category) {
            books = data.filter((book) => book.category === category);
        }
        if (searchText) {
            books = books.filter(
                (book) =>
                    book.title.toLowerCase().includes(searchText.toLowerCase()) ||
                    book.author.toLowerCase().includes(searchText.toLowerCase())
            );
        }
        setFilteredBooks(books);
    }, [category, searchText]);

    function handleSearch(searchTerm) {
        setSearchText(searchTerm);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
            />
            {filteredBooks.length > 0 ? (
                <div className="book-list">
                    {
                        filteredBooks.map((book) => <Book key={book.id} data={book} />)
                    }
                </div>
            ) : (
                <p>No books found</p>
            )}
        </>
    );
}

export default BookList;
