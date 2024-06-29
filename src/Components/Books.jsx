import React, { useEffect, useState } from 'react';
import './Books.css'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

function Book() {
  
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleBooks, setVisibleBooks] = useState([]);

  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: { Authorization: 'whatever-you-want' }
        });
        setBooks(response.data.books);
        setVisibleBooks(response.data.books);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchBooks();
  }, []);

  const handleSearchInput = (event) => {
    const input = event.target.value;
    setSearchQuery(input);

    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(input.toLowerCase())
    );
    setVisibleBooks(filtered);
  };

 
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Kalvium Books</h1>
        <input
          className="search"
          type="text"
          placeholder="Search for a book"
          onChange={handleSearchInput}
          value={searchQuery}
        />
        <Link to="/form">
          <button className="register-button">Register</button>
        </Link>
      </div>
      <div className="book-list">
       
        {visibleBooks.map(book => (
          <div key={book.id} className="book-item">
            <h2>{book.title}</h2>
            <img src={book.imageLinks.smallThumbnail} alt={book.title} />
            <p>Pages: {book.pageCount}</p>
            <p>Rating: {book.averageRating}</p>
            <p>Free</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;