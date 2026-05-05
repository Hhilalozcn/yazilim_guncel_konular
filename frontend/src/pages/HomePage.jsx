import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ paddingBottom: '60px' }}>
      
      {/* Hero Section */}
      <div style={{
        backgroundColor: '#0ea5e9',
        background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
        borderRadius: '24px',
        padding: '60px 30px',
        textAlign: 'center',
        color: 'white',
        boxShadow: '0 20px 40px rgba(14, 165, 233, 0.2)',
        marginBottom: '60px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', margin: '0 0 20px 0', fontWeight: '700', lineHeight: '1.2' }}>
            QR Kod Destekli Sanal Balık Deneyimi
          </h1>
          <p style={{ fontSize: '1.25rem', margin: '0 0 40px 0', opacity: 0.9, lineHeight: '1.6' }}>
            Balıkları QR kod ile keşfet, 3D/AR deneyimiyle yakından incele. Akvaryum deneyimini dijital dünyayla birleştir.
          </p>
          <Link 
            to="/fish" 
            style={{ 
              display: 'inline-block',
              padding: '16px 32px', 
              backgroundColor: '#ffffff', 
              color: '#0ea5e9', 
              textDecoration: 'none', 
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.1)';
            }}
          >
            Balıkları Keşfet
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center', color: '#1e293b', fontSize: '2rem', marginBottom: '40px' }}>
          Müze Deneyimini Dijitalleştirin
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '24px' 
        }}>
          <FeatureCard 
            icon="📱" 
            title="QR ile Hızlı Erişim" 
            description="Müzedeki balıkların yanındaki kodları okutarak anında bilgiye ulaşın."
          />
          <FeatureCard 
            icon="🕶️" 
            title="3D/AR Balık Deneyimi" 
            description="Balıkları artırılmış gerçeklik ile her açıdan detaylıca inceleyin."
          />
          <FeatureCard 
            icon="🧠" 
            title="Mini Quiz ile Öğrenme" 
            description="Eğlenceli testlerle öğrendiklerinizi pekiştirin ve akılda kalıcı yapın."
          />
          <FeatureCard 
            icon="❤️" 
            title="Favori Balıkları Kaydetme" 
            description="En sevdiğiniz türleri profilinize ekleyin ve daha sonra tekrar ziyaret edin."
          />
        </div>
      </div>

      {/* How it Works Section */}
      <div style={{ 
        backgroundColor: '#f8fafc', 
        borderRadius: '24px', 
        padding: '50px 30px',
        border: '1px solid #e2e8f0'
      }}>
        <h2 style={{ textAlign: 'center', color: '#1e293b', fontSize: '2rem', marginBottom: '40px' }}>
          Nasıl Çalışır?
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '30px',
          textAlign: 'center'
        }}>
          <StepCard number="1" title="QR Kodu Okut" />
          <StepCard number="2" title="Balık Sayfasını Aç" />
          <StepCard number="3" title="Bilgileri İncele" />
          <StepCard number="4" title="Quiz Çöz ve Keşfi Tamamla" />
        </div>
      </div>

    </div>
  );
};

// Alt Componentler

const FeatureCard = ({ icon, title, description }) => (
  <div style={{
    backgroundColor: '#ffffff',
    padding: '30px 24px',
    borderRadius: '16px',
    border: '1px solid #f1f5f9',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
    textAlign: 'center',
    transition: 'transform 0.2s',
  }}
  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{icon}</div>
    <h3 style={{ color: '#0f172a', fontSize: '1.2rem', marginBottom: '12px' }}>{title}</h3>
    <p style={{ color: '#64748b', margin: 0, lineHeight: '1.5' }}>{description}</p>
  </div>
);

const StepCard = ({ number, title }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ 
      width: '60px', 
      height: '60px', 
      backgroundColor: '#e0f2fe', 
      color: '#0284c7', 
      borderRadius: '50%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      border: '4px solid #ffffff',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
    }}>
      {number}
    </div>
    <h4 style={{ color: '#334155', fontSize: '1.1rem', margin: 0 }}>{title}</h4>
  </div>
);

export default HomePage;
