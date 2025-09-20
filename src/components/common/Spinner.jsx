import React from 'react';
import '../../styles/Spinner.css';

/**
 * Spinner Component
 * 
 * A simple, reusable loading spinner component with a rotation animation.
 * Displays a circular loading indicator to show that content is being loaded.
 * 
 * @returns {JSX.Element} A spinning loading indicator
 */
const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;