import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []); // Carga los favoritos solo al montar el componente

  return (
    <div>
      <h1>Favs</h1>
      {favorites.length > 0 ? (
        <div className="card-container">
          {favorites.map((fav) => (
            <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
          ))}
        </div>
      ) : (
        <p>No tienes favoritos aún.</p>
      )}
    </div>
  );
};

export default Favs;
