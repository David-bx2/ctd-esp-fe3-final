import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import './Detail.css';

const DentistDetail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error("Error fetching dentist details:", error);
      }
    };

    fetchDentist();
  }, [id]);

  return (
    <div className={`dentist-detail-container ${theme}`}>
      <h1>Dentist Detail</h1>
      {dentist ? (
        <div className="dentist-info">
          <h2>{dentist.name}</h2>
          <p><strong>Username:</strong> {dentist.username}</p>
          <p><strong>Email:</strong> {dentist.email}</p>
          <p><strong>Phone:</strong> {dentist.phone}</p>
          <p><strong>Website:</strong> {dentist.website}</p>
          <p><strong>Address:</strong> {`${dentist.address.street}, ${dentist.address.city}`}</p>
          <p><strong>Company:</strong> {dentist.company.name}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DentistDetail;
