import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Info, Maximize, ArrowLeft } from 'lucide-react';
import { getFishList } from '../services/api';

const VirtualTourPage = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [fishes, setFishes] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchFishes = async () => {
      try {
        const data = await getFishList();
        setFishes(data);
      } catch (error) {
        console.error("Balık verileri yüklenemedi:", error);
      }
    };
    fetchFishes();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    setRotation(prev => prev + deltaX * 0.15);
    setStartX(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div 
      ref={containerRef}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        backgroundColor: '#0a1128',
        zIndex: 1000,
        cursor: isDragging ? 'grabbing' : 'grab',
        overflow: 'hidden',
        fontFamily: "'Outfit', sans-serif"
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Deep Water Panoramic Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '-50%',
        width: '300%',
        height: '100%',
        backgroundImage: 'url(https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=90&w=3000)',
        backgroundSize: 'cover',
        backgroundPosition: `${rotation}px center`,
        backgroundRepeat: 'repeat-x',
        transition: isDragging ? 'none' : 'background-position 0.2s cubic-bezier(0.1, 0.9, 0.2, 1)',
      }}></div>

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle, transparent 30%, rgba(10, 17, 40, 0.5) 100%)',
        pointerEvents: 'none'
      }}></div>

      {/* Hotspots */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {fishes.map((fish, index) => {
          // Distribute fish across the 360 view
          const xPos = (index / fishes.length) * 100;
          const yPos = 25 + (index % 4) * 15; // Vary height between 25% and 70%

          const offset = (rotation % window.innerWidth);
          const leftPos = `calc(${xPos}% + ${offset}px)`;
          
          return (
            <div 
              key={fish.id}
              onClick={(e) => { e.stopPropagation(); setActiveHotspot(fish); }}
              className="hotspot-trigger"
              style={{
                position: 'absolute',
                left: leftPos,
                top: `${yPos}%`,
                width: '60px',
                height: '60px',
                pointerEvents: 'auto',
                cursor: 'pointer',
                zIndex: 10,
                animation: `float ${3 + (index % 3)}s ease-in-out ${index * 0.5}s infinite alternate`
              }}
            >
              <div className="hotspot-ring"></div>
              <div 
                className="hotspot-dot"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${fish.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '3px solid white',
                  boxShadow: '0 0 20px rgba(23, 195, 178, 0.8)'
                }}
              >
              </div>
            </div>
          );
        })}
      </div>

      {/* UI Controls */}
      <div style={{ position: 'absolute', top: '32px', left: '32px', right: '32px', display: 'flex', justifyContent: 'space-between', pointerEvents: 'none' }}>
        <Link to="/" className="btn-primary" style={{ pointerEvents: 'auto', padding: '14px 28px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ArrowLeft size={20} /> Turdan Ayrıl
        </Link>
        <div style={{ padding: '14px 24px', backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(15px)', borderRadius: '16px', color: 'white', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '600' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#17c3b2', borderRadius: '50%', boxShadow: '0 0 10px #17c3b2' }}></div>
          360° SU ALTI KEŞFİ
        </div>
      </div>

      {/* Popup with Fish Image */}
      {activeHotspot && (
        <div 
          onClick={() => setActiveHotspot(null)}
          style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1100, backdropFilter: 'blur(10px)', animation: 'fadeIn 0.3s' }}
        >
          <div 
            onClick={e => e.stopPropagation()}
            style={{ width: 'min(500px, 90vw)', backgroundColor: 'rgba(28, 49, 94, 0.9)', backdropFilter: 'blur(20px)', borderRadius: '32px', border: '1px solid rgba(255, 255, 255, 0.2)', overflow: 'hidden', boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6)' }}
          >
            <div style={{ width: '100%', height: '240px', position: 'relative' }}>
              <img src={activeHotspot.image} alt={activeHotspot.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button 
                onClick={() => setActiveHotspot(null)}
                style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', backdropFilter: 'blur(5px)' }}
              >
                <X size={20} />
              </button>
            </div>
            
            <div style={{ padding: '32px', textAlign: 'center' }}>
              <h3 style={{ color: '#17c3b2', fontSize: '2rem', marginBottom: '12px', fontWeight: '700' }}>{activeHotspot.name}</h3>
              <p style={{ color: 'white', opacity: 0.9, lineHeight: '1.6', marginBottom: '32px', fontSize: '1.05rem' }}>{activeHotspot.funFact}</p>
              <Link to={`/fish/${activeHotspot.id}`} className="btn btn-primary" style={{ width: '100%', padding: '16px', borderRadius: '16px', fontSize: '1.1rem' }}>
                Ansiklopedide Gör
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse-ring { 0% { transform: scale(0.5); opacity: 0.8; } 100% { transform: scale(1.6); opacity: 0; } }
        @keyframes float { 
          0% { transform: translateY(0px) translateX(0px); } 
          50% { transform: translateY(-15px) translateX(10px); }
          100% { transform: translateY(5px) translateX(-5px); }
        }
        .hotspot-ring { position: absolute; width: 100%; height: 100%; border-radius: 50%; border: 3px solid #17c3b2; animation: pulse-ring 2s infinite; }
        .hotspot-dot { border-radius: 50%; transition: all 0.3s ease; }
        .hotspot-trigger:hover .hotspot-dot { transform: scale(1.15); border-color: #17c3b2 !important; box-shadow: 0 0 30px rgba(23, 195, 178, 0.8) !important; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
};

export default VirtualTourPage;
