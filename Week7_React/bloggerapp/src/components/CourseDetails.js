import React from 'react';

const CourseDetails = () => {
  const courses = ['Full Stack Web Development', 'Data Structures & Algorithms', 'Cloud Computing Basics'];

  return (
    <div style={boxStyle}>
      <h2>Course Details</h2>
      <ul style={{ textAlign: 'left' }}>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
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

export default CourseDetails;
