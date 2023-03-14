import React from "react";
import { Routes, Route, } from "react-router-dom";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Contacts from "./pages/Contacts";
import Donation from "./pages/Donation";
import Home from "./pages/Home";
import Impact from "./pages/Impact";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Navbar from "./Layout/Navbar";
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/team" element={<Team />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/donate" element={<Donation />} />
      <Route path="/nav" element={<Navbar />} />  
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

