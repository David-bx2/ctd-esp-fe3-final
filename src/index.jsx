import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext'; // Importar el ThemeProvider
import ThemeToggleButton from './Components/ThemeToggleButton'; // Importar el botón para cambiar el tema

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      {/* Agregar el botón de cambio de tema aquí */}
      <ThemeToggleButton />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);



