import React from 'react';
import { Link } from 'react-router-dom';

const FishCard = ({ fish }) => {
  return (
    <div className="animate-fade-in" style={{ 
      background: 'white', 
      borderRadius: '20px', 
      overflow: 'hidden', 
      display: 'flex', 
      flexDirection: 'column',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      transition: 'transform 0.3s ease',
      height: '100%'
    }}>
      <div style={{ height: '220px', width: '100%', position: 'relative' }}>
        <img 
          src={fish.image} 
          alt={fish.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '1.5rem', color: '#0a1128', fontWeight: '700' }}>{fish.name}</h3>
        <p style={{ margin: '0 0 24px 0', color: '#4a5568', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
          {fish.funFact}
        </p>
        
        <Link 
          to={`/fish/${fish.id}`} 
          className="btn btn-primary"
          style={{ 
            width: '100%', 
            padding: '14px', 
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #227c9d, #1c315e)',
            color: 'white',
            fontWeight: '600',
            textAlign: 'center',
            textDecoration: 'none'
          }}
        >
          Detayları Gör
        </Link>
      </div>
    </div>
  );
};

export default FishCard;
