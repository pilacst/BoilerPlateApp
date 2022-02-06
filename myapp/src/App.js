import React from 'react';
import Home from './components/pages/home/Home';
import Dashboard from './components/pages/dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <>
//     <Home />
//     <Dashboard/></>
//   );
// }

export default App;
