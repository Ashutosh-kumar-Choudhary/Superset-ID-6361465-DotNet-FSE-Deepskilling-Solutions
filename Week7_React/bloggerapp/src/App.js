import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState('books'); // Default view is BookDetails

  const renderComponent = () => {
    if (view === 'books') {
      return <BookDetails />;
    } else if (view === 'blogs') {
      return <BlogDetails />;
    } else if (view === 'courses') {
      return <CourseDetails />;
    }
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Conditional Rendering Example</h1>
      <button style={buttonStyle} onClick={() => setView('books')}>Book Details</button>
      <button style={buttonStyle} onClick={() => setView('blogs')}>Blog Details</button>
      <button style={buttonStyle} onClick={() => setView('courses')}>Course Details</button>

      {renderComponent()}
    </div>
  );
}

export default App;
