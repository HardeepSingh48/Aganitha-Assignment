/**
 * Open Library API Service
 * 
 * This module provides functions to interact with the Open Library API
 * for searching books and retrieving book information.
 */

/**
 * Searches for books using the Open Library API
 * 
 * @param {string} query - The book title to search for
 * @returns {Promise<Array>} Array of simplified book objects
 */
export const searchBooks = async (query) => {
  // Return empty array immediately if query is empty or null
  if (!query || query.trim() === '') {
    return [];
  }

  try {
    // Encode the query to handle special characters and spaces
    const encodedQuery = encodeURIComponent(query.trim());
    
    // Make API request to Open Library search endpoint
    const response = await fetch(`https://openlibrary.org/search.json?title=${encodedQuery}`);
    
    // Check if the network response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }
    
    // Parse the JSON response
    const data = await response.json();
    
    // Extract books from the 'docs' property, or return empty array if not found
    const books = data.docs || [];
    
    // Map over the books array and extract essential information
    const simplifiedBooks = books.map(book => ({
      id: book.key, // Unique identifier (e.g., "/works/OL45883W")
      title: book.title || 'Unknown Title', // Book title
      author: book.author_name ? book.author_name[0] : 'Unknown Author', // First author from the array
      coverId: book.cover_i || null, // Cover image ID (null if no cover available)
      firstPublishYear: book.first_publish_year || null, // Year of first publication
      isbn: book.isbn ? book.isbn[0] : null, // First ISBN if available
      subject: book.subject ? book.subject.slice(0, 3) : [], // First 3 subjects for categories
      publishYear: book.publish_year ? book.publish_year[0] : null, // Most recent publish year
      language: book.language ? book.language[0] : 'en', // Primary language
      pageCount: book.number_of_pages_median || null // Median page count if available
    }));
    
    return simplifiedBooks;
    
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching books:', error);
    
    // Re-throw the error so calling components can handle it
    throw new Error('Failed to fetch books. Please try again.');
  }
};

/**
 * Generates the cover image URL for a book
 * 
 * @param {number|null} coverId - The cover ID from Open Library
 * @param {string} size - Size of the cover image ('S', 'M', 'L')
 * @returns {string|null} Cover image URL or null if no cover ID
 */
export const getCoverImageUrl = (coverId, size = 'M') => {
  if (!coverId) return null;
  
  return `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
};

/**
 * Searches books by author name
 * 
 * @param {string} authorName - The author name to search for
 * @returns {Promise<Array>} Array of simplified book objects
 */
export const searchBooksByAuthor = async (authorName) => {
  if (!authorName || authorName.trim() === '') {
    return [];
  }

  try {
    const encodedAuthor = encodeURIComponent(authorName.trim());
    const response = await fetch(`https://openlibrary.org/search.json?author=${encodedAuthor}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch books by author');
    }
    
    const data = await response.json();
    const books = data.docs || [];
    
    const simplifiedBooks = books.map(book => ({
      id: book.key,
      title: book.title || 'Unknown Title',
      author: book.author_name ? book.author_name[0] : 'Unknown Author',
      coverId: book.cover_i || null,
      firstPublishYear: book.first_publish_year || null,
      isbn: book.isbn ? book.isbn[0] : null,
      subject: book.subject ? book.subject.slice(0, 3) : [],
      publishYear: book.publish_year ? book.publish_year[0] : null,
      language: book.language ? book.language[0] : 'en',
      pageCount: book.number_of_pages_median || null
    }));
    
    return simplifiedBooks;
    
  } catch (error) {
    console.error('Error fetching books by author:', error);
    throw new Error('Failed to fetch books by author. Please try again.');
  }
};

/**
 * Searches books by subject/genre
 * 
 * @param {string} subject - The subject/genre to search for
 * @returns {Promise<Array>} Array of simplified book objects
 */
export const searchBooksBySubject = async (subject) => {
  if (!subject || subject.trim() === '') {
    return [];
  }

  try {
    const encodedSubject = encodeURIComponent(subject.trim());
    const response = await fetch(`https://openlibrary.org/search.json?subject=${encodedSubject}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch books by subject');
    }
    
    const data = await response.json();
    const books = data.docs || [];
    
    const simplifiedBooks = books.map(book => ({
      id: book.key,
      title: book.title || 'Unknown Title',
      author: book.author_name ? book.author_name[0] : 'Unknown Author',
      coverId: book.cover_i || null,
      firstPublishYear: book.first_publish_year || null,
      isbn: book.isbn ? book.isbn[0] : null,
      subject: book.subject ? book.subject.slice(0, 3) : [],
      publishYear: book.publish_year ? book.publish_year[0] : null,
      language: book.language ? book.language[0] : 'en',
      pageCount: book.number_of_pages_median || null
    }));
    
    return simplifiedBooks;
    
  } catch (error) {
    console.error('Error fetching books by subject:', error);
    throw new Error('Failed to fetch books by subject. Please try again.');
  }
};