import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import State from "./hoops/Hooks";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/state" element={<State />} />
         {/* <Route path="/state" element={<State />} /> */}
        </Routes>
     

      <footer className="footer">
        <p>© 2025  React Router App </p>
      </footer>
    </Router>
  );
};

export default App;
