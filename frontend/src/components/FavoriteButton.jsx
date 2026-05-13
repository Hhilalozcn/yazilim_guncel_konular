import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const FavoriteButton = ({ fishId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('fish_favorites') || '[]');
    setIsFavorite(favorites.includes(fishId));
  }, [fishId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('fish_favorites') || '[]');
    let newFavorites;
    if (favorites.includes(fishId)) {
      newFavorites = favorites.filter(id => id !== fishId);
    } else {
      newFavorites = [...favorites, fishId];
    }
    localStorage.setItem('fish_favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
    
    // Dispatch custom event to notify other components (like header or favorites page)
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  return (
    <button 
      onClick={toggleFavorite}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '14px 24px',
        backgroundColor: isFavorite ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.05)',
        color: isFavorite ? '#ef4444' : 'var(--color-text-light)',
        border: `2px solid ${isFavorite ? 'rgba(239, 68, 68, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`,
        borderRadius: '16px',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '1rem',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        fontFamily: 'inherit',
        boxShadow: isFavorite ? '0 4px 15px rgba(239, 68, 68, 0.2)' : 'none'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        if (!isFavorite) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        else e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.3)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        if (!isFavorite) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        else e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
      }}
    >
      <Heart 
        size={20}
        fill={isFavorite ? '#ef4444' : 'none'} 
        strokeWidth={2.5}
        style={{ transition: 'all 0.3s ease' }}
      />
      {isFavorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
    </button>
  );
};

export default FavoriteButton;
