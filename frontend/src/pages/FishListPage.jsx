import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FishCard from '../components/FishCard';
import { getFishList } from '../services/api';

const FishListPage = () => {
  const [fishes, setFishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFishes = async () => {
      try {
        const data = await getFishList();
        setFishes(data);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchFishes();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div style={{ fontSize: '1.2rem', color: 'var(--color-aqua)' }}>Okyanus derinlikleri taranıyor...</div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '60px' }}>
      <header style={{ marginBottom: '48px' }}>
        <Link 
          to="/" 
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
          Ana Sayfaya Dön
        </Link>
        
        <h2 style={{ color: 'white', fontSize: '2.75rem', marginTop: '12px' }}>
          Deniz <span style={{ color: 'var(--color-aqua)' }}>Canlıları</span> Ansiklopedisi
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: '1.6' }}>
          Okyanusun büyüleyici dünyasını keşfedin. Her bir canlı hakkında detaylı bilgi, AR deneyimi ve eğlenceli quizler sizi bekliyor.
        </p>
      </header>
      
      <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3" style={{ gap: '32px' }}>
        {fishes.map((fish, index) => (
          <div key={fish.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <FishCard fish={fish} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishListPage;
