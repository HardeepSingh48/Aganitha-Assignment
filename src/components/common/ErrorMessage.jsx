import React from 'react';

/**
 * ErrorMessage Component
 * 
 * A simple, reusable component to display error messages with appropriate styling.
 * Shows a red-themed message box with the provided error message.
 * 
 * @param {Object} props - Component props
 * @param {string} props.message - The error message to display
 * @returns {JSX.Element|null} Error message container or null if no message
 */
const ErrorMessage = ({ message }) => {
  // If no message is provided, render nothing
  if (!message) {
    return null;
  }

  // Inline styles for the error message container
  const errorStyles = {
    backgroundColor: '#fef2f2', // Light red background (red-50)
    color: '#dc2626', // Red text (red-600)
    border: '1px solid #fecaca', // Light red border (red-200)
    borderRadius: '8px', // Rounded corners
    padding: '12px 16px', // Comfortable padding
    margin: '16px 0', // Vertical spacing
    fontSize: '14px', // Readable font size
    lineHeight: '1.5', // Good line height for readability
    fontWeight: '500', // Medium font weight
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', // Subtle shadow
    display: 'flex',
    alignItems: 'center',
    gap: '8px', // Space between icon and text
  };

  // Error icon styles
  const iconStyles = {
    flexShrink: 0, // Prevent icon from shrinking
    width: '18px',
    height: '18px',
    fill: 'currentColor',
  };

  return (
    <div style={errorStyles} role="alert" aria-live="polite">
      {/* Error icon (exclamation triangle) */}
      <svg
        style={iconStyles}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      
      {/* Error message text */}
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;