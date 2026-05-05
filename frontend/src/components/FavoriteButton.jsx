import React, { useState } from 'react';

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button 
      onClick={() => setIsFavorite(!isFavorite)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '12px 24px',
        backgroundColor: isFavorite ? '#fff1f2' : '#ffffff',
        color: isFavorite ? '#e11d48' : '#475569',
        border: `1px solid ${isFavorite ? '#fecdd3' : '#e2e8f0'}`,
        borderRadius: '12px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '1rem',
        transition: 'all 0.2s ease',
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
      }}
      onMouseOver={(e) => {
        if (!isFavorite) e.currentTarget.style.backgroundColor = '#f8fafc';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseOut={(e) => {
        if (!isFavorite) e.currentTarget.style.backgroundColor = '#ffffff';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill={isFavorite ? '#e11d48' : 'none'} 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
      {isFavorite ? 'Favorilerde' : 'Favorilere Ekle'}
    </button>
  );
};

export default FavoriteButton;
