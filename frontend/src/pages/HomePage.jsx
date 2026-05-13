import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ paddingBottom: '60px' }}>
      
      {/* Hero Section */}
      <div className="animate-fade-in" style={{
        background: 'linear-gradient(135deg, rgba(23, 195, 178, 0.2) 0%, rgba(2, 132, 199, 0.1) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '32px',
        padding: 'clamp(60px, 10vw, 100px) 24px',
        textAlign: 'center',
        color: 'white',
        marginBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '8px 20px', 
            background: 'rgba(23, 195, 178, 0.15)', 
            borderRadius: '50px', 
            color: 'var(--color-aqua)',
            fontSize: '0.9rem',
            fontWeight: '700',
            marginBottom: '24px',
            border: '1px solid rgba(23, 195, 178, 0.3)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Geleceğin Akvaryum Deneyimi
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '0 0 24px 0', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-1px' }}>
            Okyanusu <span style={{ color: 'var(--color-aqua)' }}>Keşfet</span>, <br />Teknolojiyle Yaşa
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', margin: '0 0 48px 0', opacity: 0.8, lineHeight: '1.6', maxWidth: '700px', marginInline: 'auto' }}>
            QR kodları okutun, 3D modelleri inceleyin ve Artırılmış Gerçeklik ile su altı dünyasını odanıza taşıyın.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/fish" 
              className="btn btn-primary"
              style={{ padding: '18px 40px', fontSize: '1.1rem' }}
            >
              Ansiklopediyi Aç
            </Link>
            <Link 
              to="/virtual-tour" 
              className="btn btn-outline"
              style={{ padding: '18px 40px', fontSize: '1.1rem' }}
            >
              Sanal Tur Yap
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ marginBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '16px' }}>
            Müze Deneyimini <span style={{ color: 'var(--color-aqua)' }}>Dijitalleştirin</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>Sanal teknolojilerle sınırları ortadan kaldıran özellikler.</p>
        </div>
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
  <div className="glass-card" style={{
    padding: '40px 32px',
    textAlign: 'center',
  }}>
    <div style={{ 
      fontSize: '3rem', 
      marginBottom: '24px', 
      filter: 'drop-shadow(0 0 10px rgba(23, 195, 178, 0.3))' 
    }}>{icon}</div>
    <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '16px' }}>{title}</h3>
    <p style={{ color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: '1.7' }}>{description}</p>
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
