import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ThemeContext } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <div className={`contact-container ${theme}`}>
      <h2>Quieres saber mas?</h2>
      <p>Envianos tus preguntas y te responderemos a la brevedad</p>
      <Form />
    </div>
  );
};

export default Contact;
