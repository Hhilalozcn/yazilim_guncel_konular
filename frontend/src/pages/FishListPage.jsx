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
      <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
        Yükleniyor...
      </div>
    );
  }

  return (
    <div style={{ padding: '20px 0' }}>
      <Link 
        to="/" 
        style={{ 
          textDecoration: 'none', 
          color: '#64748b', 
          marginBottom: '24px', 
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: '500',
          transition: 'color 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.color = '#0ea5e9'}
        onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}
      >
        &larr; Ana Sayfaya Dön
      </Link>
      
      <h2 style={{ marginBottom: '32px', color: '#1e293b', fontSize: '2rem' }}>
        Balık Listesi
      </h2>
      
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '24px' 
        }}
      >
        {fishes.map((fish) => (
          <FishCard key={fish.id} fish={fish} />
        ))}
      </div>
    </div>
  );
};

export default FishListPage;
