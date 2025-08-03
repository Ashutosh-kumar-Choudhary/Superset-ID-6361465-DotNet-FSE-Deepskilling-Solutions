import React, { useState } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  const handleIncrease = () => {
    increment();
    sayHello();
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleSyntheticEvent = () => {
    alert('I was clicked');
  };

  const boxStyle = {
    border: '1px solid gray',
    padding: '15px',
    margin: '20px auto',
    width: '300px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Event Handling Example</h1>

      {/* Counter Section */}
      <div style={boxStyle}>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} style={{ marginLeft: '10px' }}>Decrement</button>
      </div>

      {/* Increase Button Box */}
      <div style={boxStyle}>
        <button onClick={handleIncrease}>Increase</button>
      </div>

      {/* Say Welcome Box */}
      <div style={boxStyle}>
        <button onClick={() => sayWelcome('Welcome')}>Say Welcome</button>
      </div>

      {/* Synthetic Event Box */}
      <div style={boxStyle}>
        <button onClick={handleSyntheticEvent}>OnPress (Synthetic Event)</button>
      </div>

      {/* Currency Converter Box */}
      <div style={boxStyle}>
        <CurrencyConvertor />
      </div>

    </div>
  );
}

export default App;
