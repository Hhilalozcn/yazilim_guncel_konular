import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FishCard from '../components/FishCard';
import { getFishList } from '../services/api';
import { Heart } from 'lucide-react';

const FavoritesPage = () => {
  const [fishes, setFishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFishes = async () => {
      try {
        const favorites = JSON.parse(localStorage.getItem('fish_favorites') || '[]');
        const allFishes = await getFishList();
        const favoritedFishes = allFishes.filter(fish => favorites.includes(fish.id));
        setFishes(favoritedFishes);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchFishes();
    
    // Listen for changes in favorites
    const handleUpdate = () => {
      const favorites = JSON.parse(localStorage.getItem('fish_favorites') || '[]');
      setFishes(prev => prev.filter(fish => favorites.includes(fish.id)));
    };
    
    window.addEventListener('favoritesUpdated', handleUpdate);
    return () => window.removeEventListener('favoritesUpdated', handleUpdate);
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div style={{ fontSize: '1.2rem', color: 'var(--color-aqua)' }}>Favorileriniz taranıyor...</div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '60px' }}>
      <header style={{ marginBottom: '48px' }}>
        <Link 
          to="/fish" 
          style={{ 
            textDecoration: 'none', 
            color: 'rgba(255,255,255,0.6)', 
            marginBottom: '24px', 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: '500',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-aqua)'}
          onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Kütüphaneye Dön
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
          <Heart size={40} color="#ef4444" fill="#ef4444" />
          <h2 style={{ color: 'white', fontSize: '2.75rem', margin: 0 }}>
            Favori <span style={{ color: 'var(--color-aqua)' }}>Canlılarım</span>
          </h2>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: '1.6', marginTop: '16px' }}>
          Beğendiğiniz ve daha sonra tekrar bakmak istediğiniz deniz canlılarını burada bulabilirsiniz.
        </p>
      </header>
      
      {fishes.length > 0 ? (
        <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3" style={{ gap: '32px' }}>
          {fishes.map((fish, index) => (
            <div key={fish.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <FishCard fish={fish} />
            </div>
          ))}
        </div>
      ) : (
        <div style={{ 
          padding: '80px 40px', 
          textAlign: 'center', 
          backgroundColor: 'rgba(255,255,255,0.03)', 
          borderRadius: '24px',
          border: '1px dashed rgba(255,255,255,0.1)'
        }}>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>
            Henüz favorilere eklenmiş bir canlı bulunmuyor.
          </p>
          <Link to="/fish" className="btn btn-primary">
            Kütüphaneyi Keşfet
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
