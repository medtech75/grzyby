import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpeciesList from './SpeciesList';
import SpeciesDetail from './SpeciesDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpeciesList />} />
        <Route path="/species/:name" element={<SpeciesDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
