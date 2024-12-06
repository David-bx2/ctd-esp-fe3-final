import React from 'react';
import "./Card.css";

const Card = ({ id, name, username, onAdd, onRemove, onClick, isFavorite }) => {
  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      onRemove(id);
    } else {
      onAdd({ id, name, username });
    }
  };

  return (
    <div className="card" onClick={onClick}>
      <h2>{name}</h2>
      <p>{username}</p>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      </button>
    </div>
  );
};

export default Card;





