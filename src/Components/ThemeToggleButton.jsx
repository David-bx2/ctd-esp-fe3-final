// src/Components/ThemeToggleButton.jsx

import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Accedemos al contexto del tema

  return (
    <button 
      onClick={toggleTheme} 
      style={{
        position: 'absolute', // Posicionar el botón en la esquina
        top: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
    </button>
  );
};

export default ThemeToggleButton;
