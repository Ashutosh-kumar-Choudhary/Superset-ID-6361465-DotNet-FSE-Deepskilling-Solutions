import React from 'react';

const App = () => {
  const office = {
    name: 'DBS',
    rent: 50000,
    address: 'Chennai',
    image: 'https://images.unsplash.com/photo-1593976845261-4d8be7335db7?auto=format&fit=crop&w=600&q=80'  // Relevant office image
  };

  const rentStyle = {
    color: office.rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Office Space , at Affordable Range</h1>  {/* Space before comma is intentional */}

      <img
        src={office.image}
        alt="Office Space"
        style={{
          width: '300px',
          height: '200px',
          objectFit: 'cover',
          marginTop: '20px'
        }}
      />

      <div style={{ textAlign: 'left', display: 'inline-block', marginTop: '20px' }}>
        <h2>Name: {office.name}</h2>
        <p style={rentStyle}>Rent: Rs. {office.rent}</p>
        <p>Address: {office.address}</p>
      </div>
    </div>
  );
};

export default App;
