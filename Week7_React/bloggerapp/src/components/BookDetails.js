import React from 'react';

const BookDetails = () => {
  const books = ['React Fundamentals', 'JavaScript Basics', 'Learning Node.js'];

  return (
    <div style={boxStyle}>
      <h2>Book Details</h2>
      <ul style={{ textAlign: 'left' }}>
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

const boxStyle = {
  border: '1px solid gray',
  padding: '20px',
  marginTop: '20px',
  borderRadius: '8px',
  width: '400px',
  margin: 'auto',
  textAlign: 'center'
};

export default BookDetails;
