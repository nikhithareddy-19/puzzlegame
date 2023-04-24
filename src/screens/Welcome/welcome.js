import React from 'react';
import './welcome.css';

import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase-config';



function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="Welcome">
      <img src="./images/come.jpg" alt=""></img>
      <button class="btn"
        onClick={() => {
          if (auth.currentUser === null) {
            navigate("/Login");
          } else {
            navigate("/Hello", { replace: "true" });

          }
        }}
      >{'START'}

      </button>
    </div>
  );
}
export default Welcome;
