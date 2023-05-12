import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Problem from "./pages/Problem";
import Signup from "./pages/Signup";
import ProblemSet from "./pages/problemSet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/problems" element={<ProblemSet />} />
        <Route path="/problems/:id" element={<Problem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
