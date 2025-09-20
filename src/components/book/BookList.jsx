import React from 'react';
import BookCard from './BookCard.jsx';
import '../../styles/BookList.css';

/**
 * BookList Component
 * 
 * Displays a responsive grid of BookCard components.
 * Handles empty states and provides a clean layout for book collections.
 * 
 * @param {Object} props - Component props
 * @param {Array} props.books - Array of book objects to display
 * @returns {JSX.Element} Grid container with BookCard components
 */
const BookList = ({ books }) => {
  // Handle case when no books are provided or empty array
  if (!books || books.length === 0) {
    return (
      <div className="book-list book-list--empty">
        <div className="book-list__empty-state">
          <div className="book-list__empty-icon">
            📚
          </div>
          <h3 className="book-list__empty-title">No books found</h3>
          <p className="book-list__empty-message">
            Try searching with different keywords or browse our recommended categories.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="book-list">
      {/* Results count */}
      <div className="book-list__header">
        <p className="book-list__count">
          {books.length} {books.length === 1 ? 'book' : 'books'} found
        </p>
      </div>

      {/* Grid container for books */}
      <div className="book-list__grid">
        {books.map((book) => (
          <div key={book.id} className="book-list__item">
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;