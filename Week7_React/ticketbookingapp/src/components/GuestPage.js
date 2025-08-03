import React from 'react';

const GuestPage = ({ onLogin }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '20px', marginTop: '20px', borderRadius: '8px', width: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Welcome Guest</h2>
      <p>Flight Details:</p>
      <ul style={{ textAlign: 'left', display: 'inline-block' }}>
        <li>Flight: AI-202</li>
        <li>Departure: Delhi</li>
        <li>Arrival: Mumbai</li>
        <li>Time: 10:00 AM</li>
      </ul>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default GuestPage;
