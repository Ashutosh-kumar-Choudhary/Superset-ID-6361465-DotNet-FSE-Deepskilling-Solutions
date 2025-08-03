import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Virat', 'Rohit', 'Rahul', 'SKY', 'Hardik', 'Jadeja'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Iyer', 'Saha', 'Ashwin', 'Shami'];

  const [odd1, even1, odd2, even2, odd3, even3] = T20players;

  const allPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div style={{ width: '400px', margin: 'auto', textAlign: 'left' }}>
      <h2>Odd Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>

      <h2>Even Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>

      <h2>List of Indian Players Merged</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
