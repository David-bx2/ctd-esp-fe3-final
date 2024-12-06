import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: false, email: false });
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.length <= 5,
      email: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email),
    };
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Submitted data:", formData);
      setSuccessMessage(
        `Gracias ${formData.name}, te contactaremos cuando antes vía mail`
      );
      setFormData({ name: "", email: "" });
    } else {
      setSuccessMessage("");
      alert("Por favor verifique su información nuevamente");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Ingrese su nombre completo"
          />
          {errors.name && (
            <span className="error-message">El nombre debe tener más de 5 caracteres</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Ingrese su email"
          />
          {errors.email && (
            <span className="error-message">Ingrese un email válido</span>
          )}
        </div>
        <button type="submit">Enviar</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Form;
