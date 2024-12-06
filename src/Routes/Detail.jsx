import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { theme } = useContext(ThemeContext); // Obtener el tema actual

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error('Error fetching dentist details:', error);
      }
    };
    fetchDentist();
  }, [id]);

  return (
    <div className={`detail-container ${theme}`}>
      <h1>Detail Dentist {id}</h1>
      {dentist ? (
        <div>
          <h2>{dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;

