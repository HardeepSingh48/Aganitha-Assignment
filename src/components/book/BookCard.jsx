import React from 'react';
import '../../styles/BookCard.css';

/**
 * BookCard Component
 * 
 * Displays information for a single book in a card format.
 * Shows the book cover, title, author, and publication year.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.book - Book object containing book information
 * @param {string} props.book.title - The title of the book
 * @param {string} props.book.author - The author of the book
 * @param {string|number} props.book.coverId - The cover ID for generating cover image URL
 * @param {string|number} props.book.first_publish_year - The first publication year
 * @returns {JSX.Element} Book card component
 */
const BookCard = ({ book }) => {
  // Destructure book properties with default values
  const {
    title = 'Unknown Title',
    author = 'Unknown Author',
    coverId,
    first_publish_year
  } = book || {};

  // Construct the book cover image URL
  const getCoverImageUrl = (coverId) => {
    if (coverId) {
      return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
    }
    // Placeholder image if no cover ID is available
    return 'https://via.placeholder.com/128x192.png?text=No+Cover';
  };

  const coverImageUrl = getCoverImageUrl(coverId);

  // Handle image load errors by showing placeholder
  const handleImageError = (event) => {
    event.target.src = 'https://via.placeholder.com/128x192.png?text=No+Cover';
    event.target.alt = 'No cover available';
  };

  return (
    <div className="book-card">
      {/* Book cover image */}
      <div className="book-card__image-container">
        <img
          src={coverImageUrl}
          alt={`Cover of ${title}`}
          className="book-card__image"
          onError={handleImageError}
          loading="lazy" // Lazy loading for better performance
        />
      </div>

      {/* Book information */}
      <div className="book-card__content">
        {/* Book title */}
        <h3 className="book-card__title" title={title}>
          {title}
        </h3>

        {/* Book author */}
        <p className="book-card__author" title={author}>
          <span className="book-card__label">by</span> {author}
        </p>

        {/* Publication year */}
        {first_publish_year && (
          <p className="book-card__year">
            <span className="book-card__label">Published:</span> {first_publish_year}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookCard;