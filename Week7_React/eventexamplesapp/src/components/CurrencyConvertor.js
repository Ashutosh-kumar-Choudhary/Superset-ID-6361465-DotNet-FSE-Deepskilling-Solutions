import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = () => {
    const converted = (parseFloat(rupees) / 88.50).toFixed(2);
    setEuro(converted);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Currency Converter</h2>
      <input
        type="text"
        placeholder="Enter INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro && <p>Euro: {euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;
