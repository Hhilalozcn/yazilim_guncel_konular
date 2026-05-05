import React from 'react';
import { Link } from 'react-router-dom';

const FishCard = ({ fish }) => {
  return (
    <div 
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #eaeaea', 
        borderRadius: '16px', 
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        backgroundColor: '#ffffff',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        height: '100%'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
      }}
    >
      <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
        <img 
          src={fish.image} 
          alt={fish.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.25rem', color: '#333' }}>{fish.name}</h3>
        <p style={{ margin: '0 0 16px 0', color: '#666', fontSize: '0.9rem', lineHeight: '1.5', flex: 1 }}>
          {fish.funFact.length > 60 ? `${fish.funFact.substring(0, 60)}...` : fish.funFact}
        </p>
        
        <Link 
          to={`/fish/${fish.id}`} 
          style={{ 
            display: 'inline-block',
            textAlign: 'center',
            padding: '10px 16px', 
            backgroundColor: '#0ea5e9', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '8px',
            fontWeight: '500',
            transition: 'background-color 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0284c7'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0ea5e9'}
        >
          Detayları Gör
        </Link>
      </div>
    </div>
  );
};

export default FishCard;
