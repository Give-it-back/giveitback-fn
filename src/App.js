import React from "react";
import { Routes, Route, } from "react-router-dom";
import About from "./components/About";
import Activities from "./components/Activities";
import Contacts from "./components/Contacts";
import Donation from "./components/Donation";
import Home from "./components/Home";
import Impact from "./components/Impact";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import Team from "./components/Team";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/team" element={<Team />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/donate" element={<Donation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

