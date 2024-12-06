import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import "./Navbar.css"

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-links">
        <NavLink to="/" className="nav-button" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/contact" className="nav-button" activeClassName="active">
          Contact
        </NavLink>
        <NavLink to="/favs" className="nav-button" activeClassName="active">
          Favs
        </NavLink>
      </div>
      <button 
        onClick={toggleTheme} 
        className="nav-button toggle-theme-btn"
      >
        {theme === 'light' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
      </button>
    </nav>
  );
};

export default Navbar;
