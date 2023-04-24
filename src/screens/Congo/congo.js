import React from 'react';
import './congo.css';
import { useNavigate } from "react-router-dom";

function Congo() {
    const navigate = useNavigate();
    return (
    <div className="Intro">
        <img src="./images/congo.jpg" alt=""></img>
        <button class="btn"
          onClick={() => {
            navigate("/Robo");
          }}
        >{'Congulations!!! ,You cleared the puzzles => Go Ahead'}
        
        </button>
  </div>
    );
}
export default Congo;
