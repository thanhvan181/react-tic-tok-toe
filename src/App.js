import React, { useState } from "react";

import { Board } from "./components/Board";
import { ResetButton } from "./components/ResetButton";

import './App.css';

const App = () => {

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isWinner, setIsWinnner] = useState(false);
  const [position, setPositon] = useState([])
  console.log("iswinner app", isWinner)
  
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (boxIdx) => {
    // Step 1: Update the board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    })

    setBoard(updatedBoard);

    
    const winner = checkWinner(updatedBoard);


    if(winner){
      setGameOver(true);

      setIsWinnner(true)
      
      
    }
    setXPlaying(!xPlaying);

  
   
  }

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log("win_condition", WIN_CONDITIONS[i])
        setPositon(WIN_CONDITIONS[i]) 
        setGameOver(true);
        return board[x];
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setPositon([])
    setBoard(Array(9).fill(null));

  }

  return (
    <div className="App">
  
      <Board isWinner={isWinner}  board={board} position={position}  onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
