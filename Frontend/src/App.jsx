import React from 'react';
import Home from './home/Home';
import { Routes, Route } from 'react-router-dom';

import Course from "./components/Course"; // Adjusted import path
import Signup from './components/Signup';
import Contact from './components/Contact';

function App() {
  return (
    <>

    <div className="dark:bg-slate-900 dark:text-white">
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/contact" element={<Contact />} />
       {/* Adjusted path */}
       <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
