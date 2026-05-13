import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFishById } from '../services/api';
import QuizBox from '../components/QuizBox';
import FavoriteButton from '../components/FavoriteButton';
import ModelViewerModal from '../components/ModelViewerModal';

const FishDetailPage = () => {
  const { id } = useParams();
  const [fish, setFish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div style={{ fontSize: '1.2rem', color: 'var(--color-aqua)' }}>Balık bilgileri yükleniyor...</div>
      </div>
    );
  }
  
  if (error || !fish) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <div style={{ padding: '20px', backgroundColor: 'rgba(239, 71, 111, 0.15)', color: '#ef476f', borderRadius: '12px', display: 'inline-block', marginBottom: '20px', border: '1px solid rgba(239, 71, 111, 0.3)' }}>
          Hata: {error || 'Balık bulunamadı.'}
        </div>
        <br />
        <Link to="/fish" className="btn btn-primary">Listeye Dön</Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '80px' }}>
      {/* Back Navigation */}
      <Link 
        to="/fish" 
        style={{ 
          textDecoration: 'none', 
          color: 'rgba(255,255,255,0.6)', 
          marginBottom: '28px', 
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
        Tüm Canlılara Dön
      </Link>
      
      {/* Hero Image Section */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: '420px',
        borderRadius: '24px',
        overflow: 'hidden',
        marginBottom: '32px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
      }}>
        <img 
          src={fish.image} 
          alt={fish.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        {/* Dark gradient overlay */}
        <div style={{ 
          position: 'absolute', 
          inset: 0,
          background: 'linear-gradient(to top, rgba(10, 17, 40, 0.95) 0%, rgba(10, 17, 40, 0.3) 50%, rgba(10, 17, 40, 0) 100%)'
        }}></div>

        {/* Content overlaid on hero */}
        <div style={{ 
          position: 'absolute', 
          bottom: '32px', 
          left: '32px', 
          right: '32px',
        }}>
          {fish.isEndangered && (
            <span style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px', 
              backgroundColor: '#ef4444', 
              color: 'white', 
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: '700',
              marginBottom: '14px',
              letterSpacing: '0.5px',
              boxShadow: '0 4px 14px rgba(239, 68, 68, 0.5)',
              textTransform: 'uppercase'
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2zm0 3.5L19.5 20h-15L12 5.5zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/>
              </svg>
              Nesli Tükenmekte
            </span>
          )}
          <h1 style={{ margin: 0, color: 'white', fontSize: '3rem', textShadow: '0 2px 12px rgba(0,0,0,0.5)', lineHeight: 1.1 }}>
            {fish.name}
          </h1>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 grid-cols-md-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>

        {/* LEFT COLUMN: Info Boxes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* YAŞAM ALANI */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '1.75rem' }}>🌊</span>
              <h3 style={{ margin: 0, color: 'var(--color-aqua)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>
                Yaşam Alanı
              </h3>
            </div>
            <p style={{ margin: 0, fontSize: '1.2rem', color: 'var(--color-text-light)', fontWeight: '500', lineHeight: '1.6' }}>
              {fish.habitat}
            </p>
          </div>

          {/* BESLENME */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '1.75rem' }}>🍽️</span>
              <h3 style={{ margin: 0, color: 'var(--color-aqua)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>
                Beslenme
              </h3>
            </div>
            <p style={{ margin: 0, fontSize: '1.2rem', color: 'var(--color-text-light)', fontWeight: '500', lineHeight: '1.6' }}>
              {fish.diet}
            </p>
          </div>

          {/* BİLİYOR MUYDUNUZ? */}
          <div className="glass-card" style={{ 
            padding: '28px', 
            borderLeft: '5px solid var(--color-aqua)',
            background: 'linear-gradient(135deg, rgba(23, 195, 178, 0.15), rgba(28, 49, 94, 0.7))'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '1.75rem' }}>💡</span>
              <h3 style={{ margin: 0, color: 'var(--color-aqua)', fontSize: '1.2rem', fontWeight: '800' }}>
                Biliyor Muydunuz?
              </h3>
            </div>
            <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-text-light)', lineHeight: '1.8', opacity: 0.95 }}>
              {fish.funFact}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ margin: 0, color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>
              İşlemler
            </h3>
            
            <FavoriteButton fishId={fish.id} />

            <button 
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '16px 24px', 
                background: 'linear-gradient(135deg, var(--color-aqua), var(--color-light-ocean))',
                color: 'white', 
                border: 'none', 
                borderRadius: '16px', 
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '1.1rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 25px rgba(23, 195, 178, 0.3)',
                fontFamily: 'inherit'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(23, 195, 178, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(23, 195, 178, 0.3)';
              }}
              onClick={() => setIsModalOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              AR/3D Görüntüle
            </button>
          </div>

          {/* Mini Quiz Card */}
          <QuizBox quizData={fish.quiz} />
        </div>

      </div>

      <ModelViewerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        fishName={fish.name} 
        modelUrl={fish.modelUrl} 
      />
    </div>
  );
};

export default FishDetailPage;
