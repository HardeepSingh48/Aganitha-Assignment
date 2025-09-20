import React, { useState } from 'react';

const TestSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('🚀 TestSearchBar handleSubmit called');
    console.log('🚀 Current searchTerm:', searchTerm);
    console.log('🚀 onSearch function:', onSearch);
    
    if (onSearch && typeof onSearch === 'function') {
      console.log('🚀 Calling onSearch with:', searchTerm);
      onSearch(searchTerm);
    } else {
      console.error('🚨 onSearch is not a function!', onSearch);
    }
  };

  const handleInputChange = (e) => {
    console.log('📝 Input changed to:', e.target.value);
    setSearchTerm(e.target.value);
  };

  console.log('🔄 TestSearchBar render, current searchTerm:', searchTerm);

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', background: 'white', borderRadius: '8px', margin: '20px 0' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={handleInputChange}
          style={{ flex: 1, padding: '10px', border: '2px solid #ddd', borderRadius: '4px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Search
        </button>
      </div>
      <p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
        Current input: "{searchTerm}"
      </p>
    </form>
  );
};

export default TestSearchBar;