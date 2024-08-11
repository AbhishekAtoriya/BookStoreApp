import React from 'react';
import Home from './home/Home';
import { Navigate, Routes, Route } from 'react-router-dom';

import Course from "./components/Course"; // Adjusted import path
import Signup from './components/Signup';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Logout from './components/Logout';

function App() {
  const [authUser] = useAuth(); // Ensure useAuth is correctly implemented
  console.log(authUser);
  
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Course /> : <Navigate to="/signup" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} /> {/* Consider redirecting after logout */}
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
