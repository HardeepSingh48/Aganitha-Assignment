import React, { useState } from 'react';
import useBookSearch from './hooks/useBookSearch.js';
import SearchBar from './components/book/SearchBar.jsx';
import BookList from './components/book/BookList.jsx';
import Spinner from './components/common/Spinner.jsx';
import ErrorMessage from './components/common/ErrorMessage.jsx';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const { books, isLoading, error } = useBookSearch(query);

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Finder</h1>
      </header>

      <main className="app-main">
        <SearchBar onSearch={handleSearch} />

        <div className="content-area">
          {isLoading ? (
            <Spinner />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : query && books.length === 0 ? (
            <div className="no-results">
              <p>No results found for "{query}"</p>
            </div>
          ) : (
            <BookList books={books} />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;