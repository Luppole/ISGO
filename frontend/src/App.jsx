import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Classroom from './Classroom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classroom/:classId" element={<Classroom />} />
      </Routes>
    </Router>
  );
}

export default App;

