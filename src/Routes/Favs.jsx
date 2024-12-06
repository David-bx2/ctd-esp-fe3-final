import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import { ThemeContext } from '../context/ThemeContext';

const Favs = () => {
  const [favorites, setFavorites] = useState([]);
  const { theme } = useContext(ThemeContext); // Obtener el tema actual

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className={`favs-container ${theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map((fav, index) => (
            <Card key={index} name={fav.name} username={fav.username} id={fav.id} />
          ))
        ) : (
          <p>No tienes favoritos aún.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;


