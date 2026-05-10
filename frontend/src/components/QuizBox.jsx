import React, { useState } from 'react';

const QuizBox = ({ quizData }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);

  if (!quizData) return null;

  const { question, options, correctAnswer } = quizData;

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsRevealed(true);
  };

  return (
    <div className="glass-card" style={{ marginTop: '32px', padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <span style={{ fontSize: '1.75rem' }}>🧠</span>
        <h3 style={{ margin: 0, color: 'var(--color-aqua)', fontSize: '1.5rem' }}>Mini Quiz</h3>
      </div>
      
      <p style={{ margin: '0 0 24px 0', color: 'var(--color-text-light)', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '500' }}>
        {question}
      </p>

      {!isRevealed ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {options.map((option, index) => (
            <button 
              key={index}
              onClick={() => handleOptionClick(option)}
              className="quiz-option"
              style={optionStyle}
              onMouseOver={handleOptionHover}
              onMouseOut={handleOptionHoverOut}
            >
              {String.fromCharCode(65 + index)}) {option}
            </button>
          ))}
        </div>
      ) : (
        <div style={{ 
          padding: '20px', 
          borderRadius: '16px', 
          backgroundColor: selectedOption === correctAnswer ? 'rgba(6, 214, 160, 0.15)' : 'rgba(239, 71, 111, 0.15)',
          border: `1px solid ${selectedOption === correctAnswer ? 'rgba(6, 214, 160, 0.3)' : 'rgba(239, 71, 111, 0.3)'}`,
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
          animation: 'fadeIn 0.4s ease'
        }}>
          <span style={{ fontSize: '2rem' }}>
            {selectedOption === correctAnswer ? '✅' : '❌'}
          </span>
          <div>
            <h4 style={{ margin: '0 0 8px 0', color: selectedOption === correctAnswer ? '#06d6a0' : '#ef476f', fontSize: '1.2rem' }}>
              {selectedOption === correctAnswer ? 'Tebrikler, Doğru Cevap!' : 'Maalesef Yanlış.'}
            </h4>
            <p style={{ margin: '0 0 16px 0', color: 'var(--color-text-light)', fontSize: '1rem', opacity: 0.9 }}>
              {selectedOption === correctAnswer 
                ? 'Harika! Bilgileri çok iyi takip ediyorsun.' 
                : `Doğru cevap: ${correctAnswer}. Merak etme, okumaya devam ederek öğrenebilirsin!`}
            </p>
            <button 
              onClick={() => { setIsRevealed(false); setSelectedOption(null); }}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Tekrar Dene
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const optionStyle = {
  padding: '16px 20px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  textAlign: 'left',
  cursor: 'pointer',
  fontSize: '1.05rem',
  color: 'var(--color-text-light)',
  transition: 'all 0.2s',
  fontWeight: '400',
  fontFamily: 'inherit'
};

const handleOptionHover = (e) => {
  e.currentTarget.style.borderColor = 'var(--color-aqua)';
  e.currentTarget.style.backgroundColor = 'rgba(23, 195, 178, 0.1)';
  e.currentTarget.style.transform = 'translateX(5px)';
};

const handleOptionHoverOut = (e) => {
  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
  e.currentTarget.style.transform = 'translateX(0)';
};

export default QuizBox;
