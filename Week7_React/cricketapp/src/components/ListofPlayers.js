import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 98 },
    { name: 'Rohit Sharma', score: 120 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Shubman Gill', score: 80 },
    { name: 'Suryakumar Yadav', score: 67 },
    { name: 'Hardik Pandya', score: 35 },
    { name: 'Ravindra Jadeja', score: 85 },
    { name: 'R Ashwin', score: 60 },
    { name: 'Mohammed Shami', score: 30 },
    { name: 'Jasprit Bumrah', score: 95 },
    { name: 'Kuldeep Yadav', score: 50 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div style={{ width: '400px', margin: 'auto', textAlign: 'left' }}>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}: {player.score}</li>
        ))}
      </ul>

      <h2>List of Players having score less than 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name}: {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
