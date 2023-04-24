
import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Welcome from "./screens/Welcome/welcome.js";
import Login from "./screens/Login/login.js";
import Hello from "./screens/Hello/hello.js";
import Intro from "./screens/Intro/intro.js";
import Puzzle from "./screens/Puzzle/puzzle.js";
import Dora from "./screens/Dora/dora.js";
import Robo from "./screens/Robo/robo.js";
import Congo from "./screens/Congo/congo.js";
import Admin from "./screens/admin/admin.js";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Welcome />}></Route>
      <Route path="Login" element={<Login />}></Route>
      <Route path="Hello" element={<Hello />}></Route>
      <Route path="Intro" element={<Intro />}></Route>
      <Route path="Puzzle" element={<Puzzle />}></Route>
      <Route path="Dora" element={<Dora />}></Route>
      <Route path="Congo" element={<Congo />}></Route>
      <Route path="Robo" element={<Robo />}></Route>
      <Route path="RESTART" element={<Welcome />}></Route>
      <Route path="admin" element={<Admin />}></Route>
    </Routes>

  );
}

export default App;
