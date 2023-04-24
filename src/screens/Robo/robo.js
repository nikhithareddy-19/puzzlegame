import React from 'react';
import './robo.css';

import { useNavigate } from "react-router-dom";



function Robo() {
    const navigate = useNavigate();
  
    return (
    <div className="Robo">
        <img src="./images/end.gif" alt=""></img>
        <button class="btn"
          onClick={() => {
            navigate("/");
          }}
        >{'RESTART'}
        
        </button>
  </div>
    );
}
export default Robo;
