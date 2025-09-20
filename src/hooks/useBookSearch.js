import { useState, useEffect, useCallback } from 'react';
import { searchBooks } from '../services/openLibraryAPI.js';

/**
 * Custom hook for managing book search functionality
 * 
 * This hook handles all the logic related to searching for books,
 * including state management for books, loading status, and error handling.
 * 
 * @param {string} query - The search query for books
 * @returns {Object} Object containing books array, loading state, and error state
 */
const useBookSearch = (query) => {
  // State for storing the fetched books
  const [books, setBooks] = useState([]);
  
  // State for tracking loading status during API calls
  const [isLoading, setIsLoading] = useState(false);
  
  // State for storing any error messages
  const [error, setError] = useState(null);

  /**
   * Async function to fetch books from the API
   * Wrapped in useCallback to prevent unnecessary re-renders
   * and to maintain referential equality across renders
   */
  const getBooks = useCallback(async () => {
    // Don't make API call if query is empty or just whitespace
    if (!query || query.trim() === '') {
      setBooks([]);
      setIsLoading(false);
      setError(null);
      return;
    }

    // Set loading state and clear any previous errors
    setIsLoading(true);
    setError(null);

    try {
      // Call the API service function to search for books
      const searchResults = await searchBooks(query);
      
      // Update books state with the search results
      setBooks(searchResults);
      
    } catch (err) {
      // If an error occurs, update the error state
      // The error message comes from the API service function
      setError(err.message);
      
      // Clear books on error to avoid showing stale data
      setBooks([]);
      
    } finally {
      // Always set loading to false when the operation completes
      setIsLoading(false);
    }
  }, [query]); // Dependency array includes query so the function updates when query changes

  /**
   * Effect to trigger book search whenever the query changes
   * This ensures the search happens automatically when the query updates
   */
  useEffect(() => {
    getBooks();
  }, [getBooks]); // getBooks is stable due to useCallback, so this won't cause infinite loops

  // Return the state variables that components need
  return {
    books,      // Array of book objects from the search results
    isLoading,  // Boolean indicating if a search request is in progress
    error       // String containing error message, or null if no error
  };
};

export default useBookSearch;