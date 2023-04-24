import React, { useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';
import { useNavigate } from "react-router-dom";
const WordPuzzle = () => {
  const navigate = useNavigate();
  const [words, setWords] = useState(['REACTJS', 'JAVASCRIPT', 'HTML', 'CSS']);
  const [wordIndex, setWordIndex] = useState(0);
  const [word, setWord] = useState(words[wordIndex]);
  const [shuffledWord, setShuffledWord] = useState(shuffleWord(word));
  const [guess, setGuess] = useState('');
  const [answers, setAnswers] = useState([]);



  function shuffleWord(word) {
    let shuffled = word.split('');
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.join('');
  }

  const docRef = doc(
    db,
    "users",
    auth.currentUser.uid,
    "puzzles",
    "puzzle"
  );

  const nextGame = doc(db, "users", auth.currentUser.uid);

  function handleGuess(event) {
    event.preventDefault();
    if (guess === word) {
      alert('Congratulations! You guessed the word!');
      setWordIndex(wordIndex + 1);
      if (wordIndex >= words.length - 1) {
        setWordIndex(0);
        const game =  updateDoc(docRef, {
          completed: true,
        });
        const gmaes =  updateDoc(nextGame, {
          level: "dora",
        });
        navigate("/Dora");
      } else {
        setGuess('');
        setAnswers([...answers, guess]); // add the guess to the answers array
        setWord(words[wordIndex + 1]);
        setShuffledWord(shuffleWord(words[wordIndex + 1]));
      }
    } else {
      alert('Sorry, try again.');
    }
  }

  return (
    <div style={{ alignContent: 'center', display: 'flex', flexDirection: "column", alignItems: 'center' }}>
      <img src="./images/10.jpg" alt="" style={{ "height": '250px' }}></img>
      <h1>Word Puzzle</h1>
      <p>Unscramble the letters to form a word:</p>
      <p>{shuffledWord}</p>
      <form onSubmit={handleGuess} style={{ alignContent: 'center', display: 'flex', flexDirection: "column", alignItems: 'center' }}>
        <label htmlFor="guess">Enter your guess:</label>
        <input type="text" id="guess" value={guess} onChange={(event) => setGuess(event.target.value.toUpperCase())} placeholder="Enter your word Here" />
        <br /><button type="submit"  >Guess</button>
      </form>
    </div>
  );
}

export default WordPuzzle;