import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Questionnaire from './pages/Questionnaire';
import Result from './pages/Result';
import Dashboard from './pages/Dashboard';
import Anxiety from './pages/dashboard/Anxiety';
import Depression from './pages/dashboard/Depression';
import Meditation from './pages/dashboard/Meditation';
import MusicTherapy from './pages/dashboard/MusicTherapy';
import Shlokas from './pages/dashboard/Shlokas';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-indigo-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/result" element={<Result />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/anxiety" element={<Anxiety />} />
            <Route path="/dashboard/depression" element={<Depression />} />
            <Route path="/dashboard/meditation" element={<Meditation />} />
            <Route path="/dashboard/music-therapy" element={<MusicTherapy />} />
            <Route path="/dashboard/shlokas" element={<Shlokas />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;