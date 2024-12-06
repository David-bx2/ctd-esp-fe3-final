import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorite = existingFavorites.some((fav) => fav.id === id);
    if (!isAlreadyFavorite) {
      const updatedFavorites = [...existingFavorites, { name, username, id }];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      alert("¡Agregado a favoritos!");
    } else {
      alert("Este favorito ya existe.");
    }
  };

  return (
    <div className="card">
      {/* Link para la página de detalle */}
      <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
        <p>{username}</p>
        <p>ID: {id}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;


