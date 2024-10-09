import React, { useState } from 'react';
import TicTacToe from './component/TicTacToe/tic-tac-toe'
import './App.css'

const App: React.FC = () => {
  const [showTicTacToe, setShowTicTacToe] = useState(false);
  const handleClick = () => {
    setShowTicTacToe(prevState => !prevState);
  };


  return (
    <div className="container">
      <button onClick={handleClick} className="center-button" >
        {showTicTacToe ? 'Hide Tic-Tac-Toe' : 'Open Tic-Tac-Toe'}
      </button>
      {showTicTacToe && <TicTacToe />}
    </div>
  );
};

export default App;
