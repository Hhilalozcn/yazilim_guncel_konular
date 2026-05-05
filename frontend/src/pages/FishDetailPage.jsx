import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFishById } from '../services/api';
import QuizBox from '../components/QuizBox';
import FavoriteButton from '../components/FavoriteButton';

const FishDetailPage = () => {
  const { id } = useParams();
  const [fish, setFish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFish = async () => {
      try {
        const data = await getFishById(id);
        setFish(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchFish();
  }, [id]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div style={{ fontSize: '1.2rem', color: '#64748b' }}>Balık bilgileri yükleniyor...</div>
      </div>
    );
  }
  
  if (error || !fish) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <div style={{ padding: '20px', backgroundColor: '#fef2f2', color: '#ef4444', borderRadius: '12px', display: 'inline-block', marginBottom: '20px' }}>
          Hata: {error || 'Balık bulunamadı.'}
        </div>
        <br />
        <Link 
          to="/fish" 
          style={{ padding: '10px 20px', backgroundColor: '#0ea5e9', color: 'white', textDecoration: 'none', borderRadius: '8px' }}
        >
          Listeye Dön
        </Link>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: '60px' }}>
      {/* Navigation */}
      <Link 
        to="/fish" 
        style={{ 
          textDecoration: 'none', 
          color: '#64748b', 
          marginBottom: '20px', 
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontWeight: '500',
          transition: 'color 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.color = '#0ea5e9'}
        onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}
      >
        &larr; Balıklara Dön
      </Link>
      
      {/* Hero Card */}
      <div style={{ 
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        border: '1px solid #f1f5f9'
      }}>
        {/* Image Header */}
        <div style={{ position: 'relative', width: '100%', height: '350px' }}>
          <img 
            src={fish.image} 
            alt={fish.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            width: '100%', 
            height: '50%', 
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)' 
          }}></div>
          
          <div style={{ 
            position: 'absolute', 
            bottom: '24px', 
            left: '24px', 
            right: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }}>
            <div>
              {fish.isEndangered && (
                <span style={{ 
                  display: 'inline-block', 
                  padding: '6px 12px', 
                  backgroundColor: '#ef4444', 
                  color: 'white', 
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  marginBottom: '12px',
                  boxShadow: '0 4px 10px rgba(239, 68, 68, 0.3)'
                }}>
                  Nesli Tükenmekte
                </span>
              )}
              <h1 style={{ margin: 0, color: 'white', fontSize: '2.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                {fish.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            
            {/* Left Column: Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h3 style={{ margin: '0 0 8px 0', color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Yaşam Alanı
                </h3>
                <p style={{ margin: 0, fontSize: '1.2rem', color: '#1e293b', fontWeight: '500' }}>
                  {fish.habitat}
                </p>
              </div>

              <div>
                <h3 style={{ margin: '0 0 8px 0', color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Beslenme
                </h3>
                <p style={{ margin: 0, fontSize: '1.2rem', color: '#1e293b', fontWeight: '500' }}>
                  {fish.diet}
                </p>
              </div>

              <div style={{ backgroundColor: '#f0f9ff', padding: '20px', borderRadius: '16px', borderLeft: '4px solid #0ea5e9' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#0284c7', fontSize: '1.1rem' }}>
                  Biliyor Muydunuz?
                </h3>
                <p style={{ margin: 0, fontSize: '1.05rem', color: '#334155', lineHeight: '1.6' }}>
                  {fish.funFact}
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Elements */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Etkileşim
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <FavoriteButton />
                
                <button 
                  style={{ 
                    flex: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 24px', 
                    backgroundColor: '#0ea5e9', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '12px', 
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'background-color 0.2s ease',
                    boxShadow: '0 4px 14px rgba(14, 165, 233, 0.3)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0284c7'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0ea5e9'}
                  onClick={() => alert('AR/3D özelliği yakında eklenecektir!')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  AR/3D Görüntüle
                </button>
              </div>

              <QuizBox 
                question={`${fish.name} balığının yaşam alanı ağırlıklı olarak neresidir?`} 
                answer={fish.habitat}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FishDetailPage;
