import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FishListPage from './pages/FishListPage';
import FishDetailPage from './pages/FishDetailPage';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
        <header style={{ padding: '20px', borderBottom: '1px solid #eee', marginBottom: '20px' }}>
          <h2>Sanal Balık Deneyimi (İskelet)</h2>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fish" element={<FishListPage />} />
            <Route path="/fish/:id" element={<FishDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
