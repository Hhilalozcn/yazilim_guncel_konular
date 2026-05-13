import React, { useEffect, useState, useRef } from 'react';
import '@google/model-viewer';
import { X, Box, Smartphone } from 'lucide-react';

const ModelViewerModal = ({ isOpen, onClose, fishName, modelUrl }) => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const viewerRef = useRef(null);

  // Handle state resets when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoaded(false);
      setShowSpinner(false);
    }
  }, [isOpen]);

  // Event listener for model-viewer to reliably hide the spinner
  useEffect(() => {
    const viewer = viewerRef.current;
    
    const handleLoad = () => {
      setIsLoaded(true);
      setShowSpinner(false);
    };

    if (viewer) {
      viewer.addEventListener('load', handleLoad);
      viewer.addEventListener('model-visibility', handleLoad);
    }

    return () => {
      if (viewer) {
        viewer.removeEventListener('load', handleLoad);
        viewer.removeEventListener('model-visibility', handleLoad);
      }
    };
  }, [isOpen]);

  // Delay the spinner so it only shows on slow networks
  useEffect(() => {
    let timer;
    if (isOpen && !isLoaded) {
      timer = setTimeout(() => {
        if (!isLoaded) setShowSpinner(true);
      }, 400); // Wait 400ms before showing the spinner
    }
    return () => clearTimeout(timer);
  }, [isOpen, isLoaded]);

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Dynamic Background Effect */}
        <div className="caustics-overlay"></div>

        {/* Top UI */}
        <h2 className="model-title">
          {fishName} <span style={{ color: 'var(--color-aqua)', fontWeight: '400', fontSize: '1.2rem', marginLeft: '8px' }}>AR/3D Deneyimi</span>
        </h2>
        
        <button className="modal-close-btn" onClick={onClose} aria-label="Kapat">
          <X size={24} />
        </button>

        {/* 3D Model Viewer Component */}
        <model-viewer
          ref={viewerRef}
          src={modelUrl || "https://modelviewer.dev/shared-assets/models/Astronaut.glb"}
          ios-src=""
          alt={`${fishName} 3D Modeli`}
          shadow-intensity="1"
          camera-controls
          auto-rotate
          rotation-per-second="30deg"
          touch-action="pan-y"
          interaction-prompt="auto"
          camera-orbit="0deg 75deg 105%"
          min-camera-orbit="auto auto 10%"
          max-camera-orbit="auto auto 200%"
          ar
          ar-modes="webxr scene-viewer quick-look"
          exposure="1.2"
          shadow-softness="1"
          loading="eager"
          reveal="auto"
          style={{ width: '100%', height: '100%', borderRadius: '12px' }}
        >
          {/* Custom Progress Bar Slot */}
          {showSpinner && !isLoaded && (
            <div slot="progress-bar" className="loading-spinner"></div>
          )}
          {/* Remove/Hide Default Poster */}
          <div slot="poster" style={{ display: 'none' }}></div>
        </model-viewer>

        {/* Bottom Controls */}
        <div className="modal-controls">
          <button 
            className="btn btn-outline"
            style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}
            onClick={() => viewerRef.current?.cameraControls && viewerRef.current?.resetTurntableRotation()}
          >
            <Box size={18} />
            Sıfırla
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => viewerRef.current?.activateAR()}
          >
            <Smartphone size={18} />
            AR Deneyimini Başlat
          </button>
        </div>

      </div>
    </div>
  );
};

export default ModelViewerModal;
