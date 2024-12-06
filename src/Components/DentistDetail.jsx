import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DentistDetail = () => {
  const { id } = useParams(); // Obtenemos el id desde la URL
  console.log("ID recibido:", id); // Para verificar que el id está llegando correctamente

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Lógica para obtener los detalles del usuario por ID
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUser(data); // Establecemos los detalles del usuario en el estado
      } catch (error) {
        console.error("Error al obtener detalles:", error);
      }
    };

    fetchUser();
  }, [id]); // Dependencia del id para actualizar cuando cambie

  return (
    <div>
      <h1>Detalle del Usuario</h1>
      {user ? (
        <div className="user-detail">
          <h2>{user.name}</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
};

export default DentistDetail;

