import React from "react";
import "./index.css"
import Home from "./routes/home.js";
import Contact from "./routes/contact.js";
import Education from "./routes/education.js";
import Experience from "./routes/experience.js";
import Projects from "./routes/projects.js";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
   <>
   <Routes>
    <Route path="/" element ={<Home/>} />
    <Route path="/Home" element ={<Home/>} />
    <Route path="/Education" element ={<Education/>} />
    <Route path="/Experience" element ={<Experience/>} />
    <Route path="/Projects" element ={<Projects/>} />
    <Route path="/Contact" element ={<Contact/>} />
   </Routes>
   </>
  );
}

export default App;
