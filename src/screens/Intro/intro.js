import React from 'react';
import './intro.css';
import { useNavigate } from "react-router-dom";

function Intro() {
    const navigate = useNavigate();
    return (
    <div className="Intro">
        <img src="./images/intro theme.jpg" alt=""></img>
        <button class="btn"
          onClick={() => {
            navigate("/Puzzle");
          }}
        >{'Welcome to Roboworld!!!,Here is the simple puzzles to get your robo charged'}
        
        </button>
  </div>
    );
}
export default Intro;
