import React, { useState } from 'react';

const QuizBox = ({ question, answer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (isCorrect) => {
    setSelectedOption(isCorrect);
  };

  return (
    <div style={{ 
      backgroundColor: '#f8fafc', 
      borderRadius: '16px', 
      padding: '24px', 
      marginTop: '32px',
      border: '1px solid #e2e8f0'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <span style={{ fontSize: '1.5rem' }}>🧠</span>
        <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.25rem' }}>Mini Quiz</h3>
      </div>
      
      <p style={{ margin: '0 0 20px 0', color: '#334155', fontSize: '1.05rem', lineHeight: '1.5' }}>
        {question}
      </p>

      {selectedOption === null ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button 
            onClick={() => handleOptionClick(false)}
            style={optionStyle}
            onMouseOver={handleOptionHover}
            onMouseOut={handleOptionHoverOut}
          >
            A) Göller ve Nehirler
          </button>
          <button 
            onClick={() => handleOptionClick(true)}
            style={optionStyle}
            onMouseOver={handleOptionHover}
            onMouseOut={handleOptionHoverOut}
          >
            B) Okyanuslar ve Resifler
          </button>
          <button 
            onClick={() => handleOptionClick(false)}
            style={optionStyle}
            onMouseOver={handleOptionHover}
            onMouseOut={handleOptionHoverOut}
          >
            C) Sığ Havuzlar
          </button>
        </div>
      ) : (
        <div style={{ 
          padding: '16px', 
          borderRadius: '12px', 
          backgroundColor: selectedOption ? '#ecfdf5' : '#fef2f2',
          border: `1px solid ${selectedOption ? '#a7f3d0' : '#fecaca'}`,
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}>
          <span style={{ fontSize: '1.5rem', marginTop: '-2px' }}>
            {selectedOption ? '✅' : '❌'}
          </span>
          <div>
            <h4 style={{ margin: '0 0 4px 0', color: selectedOption ? '#059669' : '#dc2626' }}>
              {selectedOption ? 'Tebrikler, Doğru Cevap!' : 'Maalesef Yanlış.'}
            </h4>
            <p style={{ margin: 0, color: selectedOption ? '#047857' : '#b91c1c', fontSize: '0.95rem' }}>
              {selectedOption 
                ? 'Harika! Bu balığın yaşam alanını doğru bildiniz.' 
                : 'Tekrar deneyin veya yukarıdaki bilgileri tekrar gözden geçirin.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const optionStyle = {
  padding: '14px 20px',
  backgroundColor: '#ffffff',
  border: '1px solid #cbd5e1',
  borderRadius: '10px',
  textAlign: 'left',
  cursor: 'pointer',
  fontSize: '1rem',
  color: '#334155',
  transition: 'all 0.2s',
  fontWeight: '500'
};

const handleOptionHover = (e) => {
  e.currentTarget.style.borderColor = '#0ea5e9';
  e.currentTarget.style.backgroundColor = '#f0f9ff';
  e.currentTarget.style.color = '#0284c7';
};

const handleOptionHoverOut = (e) => {
  e.currentTarget.style.borderColor = '#cbd5e1';
  e.currentTarget.style.backgroundColor = '#ffffff';
  e.currentTarget.style.color = '#334155';
};

export default QuizBox;
