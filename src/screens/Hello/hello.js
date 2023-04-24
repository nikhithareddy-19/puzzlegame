import React from 'react';
import './hello.css';
import { useNavigate } from "react-router-dom";



function Hello() {
    const navigate = useNavigate();
  
    return (
    <div className="Hello">
        <img src="./images/welcome robo.gif" alt=""></img>
        <button class="btn"
          onClick={() => {
            
            navigate("/Intro");
          }}
        >{'Go Ahead'}
        
        </button>
  </div>
    );
}
export default Hello;
