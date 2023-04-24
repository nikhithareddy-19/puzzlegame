import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './dora.css';

import { updateDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';

const Puzzle = () => {
  const storedUid = localStorage.getItem("uid");

  const docRef = doc(
    db,
    "users",
    storedUid,
    "puzzles",
    "dora"
  );
  const nextGame = doc(db, "users", storedUid);
  const [tiles, setTiles] = useState(Array.from({ length: 9 }, (_, i) => i + 1));
  const [shuffledTiles, setShuffledTiles] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    shuffleTiles();
  }, []);

  const shuffleTiles = () => {
    let newTiles = [...tiles];
    for (let i = newTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newTiles[i], newTiles[j]] = [newTiles[j], newTiles[i]];
    }
    setShuffledTiles(newTiles);
    setMoves(0);
  };

  const handleClick = (index) => {
    let newTiles = [...shuffledTiles];
    if (newTiles[index] === 9) {
      return;
    }
    let clickedTile = newTiles.splice(index, 1)[0];
    let emptyIndex = newTiles.indexOf(9);
    newTiles.splice(emptyIndex, 0, clickedTile);
    setShuffledTiles(newTiles);
    setMoves(moves + 1);
    checkSolution();
  };

  const checkSolution = async () => {
    for (let i = 0; i < shuffledTiles.length; i++) {
      if (shuffledTiles[i] !== i + 1) {
        return false;
      }
    }
    const game = updateDoc(docRef, {
      completed: true,
    });
    const gmaes = updateDoc(nextGame, {
      level: "dora",
      completed: true,
    });
    navigate("/Congo");
  };

  const handleSolve = () => {
    let newTiles = [...tiles];
    setShuffledTiles(newTiles);
    setMoves(0);
  };
  const navigate = useNavigate();
  return (
    <div className="puzzle-container">
      <img src="./images/loginback.jpg" alt=""></img>
      {shuffledTiles.map((tile, index) => (
        <div
          key={index}
          className={`puzzle-tile ${tile === index + 1 ? 'correct' : tile === 9 ? 'empty' : 'incorrect'}`}
          onClick={() => handleClick(index)}
        >
          {tile === 9 ? '' : tile}
        </div>
      ))}
      <div className="puzzle-moves">Moves: {moves}</div>
      <br /> <button className="puzzle-button" onClick={shuffleTiles}>Shuffle</button>
      <br />
      <button class="btn"
        onClick={() => {
        }}
      >{'Go Ahead'}

      </button>
      {checkSolution() && <div className="puzzle-message">Congratulations, you solved the puzzle!</div>}
    </div>
  );
};

export default Puzzle;