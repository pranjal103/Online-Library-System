import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../src/assets/utils/MockData';
import Book from './Book';
function Home() {
  const categories = [
    { id: 1, name: "Fiction" },
    { id: 2, name: "Non-Fiction" },
    { id: 3, name: "Sci-Fi" },
    { id: 4, name: "Fantasy" },
    { id: 5, name: "Self-Help" },
    { id: 6, name: "Biography" },
  ];

  return (
    <>
      <h1>Library Hub</h1>
      <h2>Welcome to Library Hub, your one-stop destination for all things books!</h2>
      <div className="categories">
        <h2>Categories</h2>
        <div className="category-cards">
          {categories.map((category) => (
            <Link to={`/books/${category.name}`}>
                <div
              key={category.id}
              className="category-card"
                >
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='popularBooks'>
        {
          data.slice(0,5).map((book) => <Book key={book.id} data={book} />)
        }
      </div>    
     
    </>
  );
}

export default Home;
