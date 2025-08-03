import React from 'react';

const BlogDetails = () => {
  const blogs = ['Understanding React Hooks', 'JavaScript Closures Explained', 'Tips for Effective Debugging'];

  return (
    <div style={boxStyle}>
      <h2>Blog Details</h2>
      <ul style={{ textAlign: 'left' }}>
        {blogs.map((blog, index) => (
          <li key={index}>{blog}</li>
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

export default BlogDetails;
