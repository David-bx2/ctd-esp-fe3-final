import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import { ThemeContext } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error obteniendo Dentistas:', error);
      }
    };

    fetchDentists();
  }, []);

  const addFavorite = (dentist) => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = storedFavorites.some((fav) => fav.id === dentist.id);

    if (!isAlreadyFavorite) {
      const updatedFavorites = [...storedFavorites, dentist];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      alert(`${dentist.name} agregado a favoritos!`);
    } else {
      alert(`${dentist.name} ya esta en favoritos!`);
    }
  };

  const goToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <main className={`home-container ${theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.length > 0 ? (
          dentists.map((dentist) => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
              onAdd={addFavorite}
              onClick={() => goToDetail(dentist.id)}
              isFavorite={false}
            />
          ))
        ) : (
          <p>Loading dentists...</p>
        )}
      </div>
    </main>
  );
};

export default Home;


