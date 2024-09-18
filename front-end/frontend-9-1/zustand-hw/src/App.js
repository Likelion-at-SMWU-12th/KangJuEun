import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Playlist from "./Playlist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/playlist" element={<Playlist />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
