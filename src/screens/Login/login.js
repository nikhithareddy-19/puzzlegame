import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase-config";
import { setDoc, doc } from "firebase/firestore";

export const Login = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }


  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="Email" placeholder="email@gmail.com" id="  Email" name="email" />
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="Enter Password" id="Password" name="password" />
      </form>
      <button class="btn"
        onClick={async () => {
          if (email == "admin@gmail.com" && pass == "admin@123") {
            navigate("/admin");
          }
          else {
            try {
              console.log("trying1");
              const user = await signInWithEmailAndPassword(
                auth,
                email,
                pass
              ).then(() => {
                localStorage.setItem("uid", auth.currentUser.uid);
                navigate("/Hello", { replace: "true" });
              });
              console.log(user);
            }
            catch (error) {
              console.log("error");
              console.log(error.code);
              if (error.code === "auth/user-not-found") {
                await createUserWithEmailAndPassword(
                  auth,
                  email,
                  pass
                ).then(async () => {
                  await setDoc(doc(db, "users", auth.currentUser.uid), {
                    id: auth.currentUser.uid,
                    completed: false,
                    email: email,
                    level: "puzzle",
                    started: false,
                    score: 0,
                    accuracy: 0,
                    time: "00:00",
                    sessionTime: "00:00",
                  });
                  await setDoc(
                    doc(
                      db,
                      "users",
                      auth.currentUser.uid,
                      "puzzles",
                      "puzzle"
                    ),
                    {
                      started: false,
                      completed: false,
                      time: "00::00",
                      trials: 0,
                      wrongPairs: 0,
                      accuracy: 0,
                      score: 0,
                    }
                  );
                  await setDoc(
                    doc(
                      db,
                      "users",
                      auth.currentUser.uid,
                      "puzzles",
                      "dora"
                    ),
                    {
                      started: false,
                      completed: false,
                      time: "00::00",
                      trials: 0,
                      moves: 0,
                      accuracy: 0,
                      score: 0,
                    }
                  );

                  console.log(auth.currentUser.uid);
                  localStorage.setItem("uid", auth.currentUser.uid);
                  navigate("/Hello", { replace: "true" });
                });
              } else {
              }
            }
          }
        }}
      >{'Login'}

      </button>
    </div>
  )
}
export default Login