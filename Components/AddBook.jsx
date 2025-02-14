// AddBook.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../src/assets/utils/cardSlice"; 

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Fiction");
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [rating, setRating] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Fantasy",
    "Self-Help",
    "Biography"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !author || !category || !description || !imageUrl || !rating) {
      alert("Please fill all fields");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
      category,
      coverImage: imageUrl,
      description
    };

    dispatch(addItem(newBook)); 
    navigate("/books"); 
  };

  return (
    <div className="book-details">
      <h2>Add a New Book</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Image Url:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Category:</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;