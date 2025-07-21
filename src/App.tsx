import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Notes from './pages/Notes';
import Shortcuts from './pages/Shortcuts';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/shortcuts" element={<Shortcuts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;