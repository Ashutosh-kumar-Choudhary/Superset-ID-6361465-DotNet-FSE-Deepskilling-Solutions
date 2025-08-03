import React from 'react';

const UserPage = ({ onLogout }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '20px', marginTop: '20px', borderRadius: '8px', width: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Welcome User</h2>
      <p>Flight Booking Section:</p>
      <ul style={{ textAlign: 'left', display: 'inline-block' }}>
        <li>Flight: AI-202</li>
        <li>Seats Available: 50</li>
        <li>Price: ₹5000</li>
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserPage;
