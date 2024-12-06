import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { theme } = useContext(ThemeContext); // Obtener el tema actual

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

    fetchDentists();
  }, []);

  return (
    <main className={`home-container ${theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.length > 0 ? (
          dentists.map((dentist) => (
            <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
          ))
        ) : (
          <p>Loading dentists...</p>
        )}
      </div>
    </main>
  );
};

export default Home;

