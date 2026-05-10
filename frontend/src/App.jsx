import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FishListPage from './pages/FishListPage';
import FishDetailPage from './pages/FishDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import VirtualTourPage from './pages/VirtualTourPage';

function App() {
  return (
    <Router>
      <div className="ocean-bg"></div>
      <div className="bubbles">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="bubble" 
            style={{ 
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
              '--t': `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="app-container" style={{ 
        maxWidth: '1200px', 
        width: '95%',
        margin: '0 auto', 
        padding: '0 10px',
        position: 'relative',
        zIndex: 1
      }}>
        <header style={{ 
          padding: '24px 0', 
          borderBottom: '1px solid rgba(255,255,255,0.08)', 
          marginBottom: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              background: 'linear-gradient(135deg, var(--color-aqua), var(--color-light-ocean))',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(23, 195, 178, 0.3)'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M2 12c.5 5 2.5 8 5 8s3.5-3 3.5-3 1 3 3.5 3 4.5-3 5-8M2 12c.5-5 2.5-8 5-8s3.5 3 3.5 3 1-3 3.5-3 4.5 3 5 8M22 12c-1 0-2 1-2 2s1 2 2 2" />
              </svg>
            </div>
            <h2 style={{ color: 'white', margin: 0, fontSize: '1.4rem', fontWeight: '700', letterSpacing: '-0.5px' }}>
              Sanal <span style={{ color: 'var(--color-aqua)' }}>Balık</span> Deneyimi
            </h2>
          </Link>
          
          <nav style={{ display: 'flex', gap: '24px' }}>
            <Link to="/fish" style={{ color: 'white', fontWeight: '500', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.8}>Kütüphane</Link>
            <Link to="/favorites" style={{ color: 'white', fontWeight: '500', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.8}>Favorilerim</Link>
            <Link to="/" style={{ color: 'white', fontWeight: '500', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseOver={e => e.currentTarget.style.opacity = 1} onMouseOut={e => e.currentTarget.style.opacity = 0.8}>Hakkında</Link>
          </nav>
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fish" element={<FishListPage />} />
            <Route path="/fish/:id" element={<FishDetailPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/virtual-tour" element={<VirtualTourPage />} />
          </Routes>
        </main>
        
        <footer style={{ 
          marginTop: '80px', 
          padding: '40px 0', 
          textAlign: 'center', 
          borderTop: '1px solid rgba(255,255,255,0.05)',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.9rem'
        }}>
          <p>© 2026 Sanal Balık Deneyimi. Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
