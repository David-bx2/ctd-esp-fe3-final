import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import { ThemeContext } from '../context/ThemeContext';

const Favs = () => {
  const [favorites, setFavorites] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className={`favs-container ${theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map((fav) => (
            <Card
              key={fav.id}
              name={fav.name}
              username={fav.username}
              id={fav.id}
              isFavorite={true}
              onRemove={removeFavorite}
            />
          ))
        ) : (
          <p>No tienes favoritos aún.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;



